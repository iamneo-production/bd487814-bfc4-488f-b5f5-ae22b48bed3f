package com.examly.springapp.Controller;

import java.io.IOException;

import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.examly.springapp.Model.ImageModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.ImageService;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

@RestController
public class ImageController {
	
	@Autowired
	private ImageService imgService;
	
	@RequestMapping(value="/image/add",method=RequestMethod.POST) // ADDS A NEW IMAGE - FILE, EMAIL
	@CrossOrigin(origins = "http://localhost:8081")
	public void addImage(@RequestParam("image") MultipartFile file, @RequestParam("email") String email){ // ADDS AN IMAGE TO THE DB
		try {
			Blob img=new SerialBlob(file.getBytes()); // BYTES ARE CONVERTED TO BLOB
			
			imgService.addImage(file.getOriginalFilename(),img,file.getContentType(),email);
			
		}
		
		catch (SerialException e) {
			e.printStackTrace();
		}
		
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	
	/*@RequestMapping(value="/image/add",method=RequestMethod.POST)
	@CrossOrigin(origins = "http://localhost:8081")
	public void addImage(@RequestParam("image") Blob img){
		
		imgService.addImage(img);
	}*/
	
	
	@RequestMapping(value="/admin/image/{id}",method=RequestMethod.DELETE) // ONLY ADMIN CAN DELETE AN IMAGE - ID
	@CrossOrigin(origins = "http://localhost:8081")
	public void deleteImage(@PathVariable String id){ // DELETES AN IMAGE FROM THE DB
		imgService.deleteImage(id); 
		
	}
	
	@RequestMapping(value="/admin/imageEdit/{id}",method=RequestMethod.PUT) // ONLY ADMIN CAN UPDATE AN IMAGE - NEW IMAGE, ID
	@CrossOrigin(origins = "http://localhost:8081")
	public void updateImage(@RequestParam("image") MultipartFile file, @PathVariable String id){ 
		try {
			Blob img=new SerialBlob(file.getBytes());

			imgService.updateImage(id,file.getOriginalFilename(),img,file.getContentType());
			
		}
		
		catch (SerialException e) {
			e.printStackTrace();
		}
		
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	/*@RequestMapping(value="/image/update/{id}",method=RequestMethod.PUT)
	@CrossOrigin(origins = "http://localhost:8081")
	public void updateImage(@RequestParam("image") Blob img, @PathVariable String id){
		imgService.updateImage(img);
		
	}*/
	
	@RequestMapping(value="/image/{id}",method=RequestMethod.GET,produces=MediaType.IMAGE_JPEG_VALUE) // DISPLAYS AN IMAGE - ID
	@CrossOrigin(origins = "http://localhost:8081")
	public byte[] showImage(@PathVariable String id) {
		/*byte[] buffer = imgService.showImage(id);
		
		return buffer;*/
		
		try {
			byte[] buffer = imgService.showImage(id).getImage().getBinaryStream().readAllBytes();
			
			return buffer;
		}
		
		catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
		
	}
	
	@RequestMapping(value={"/image","/admin/image"},method=RequestMethod.GET) // USED TO DISPLAY IMAGE ID, USERMODEL, COMMENTS
	@CrossOrigin(origins = "http://localhost:8081")
	public List<ImageModel> getImages() {
		return imgService.getImages();
		
	}
}
