package com.examly.springapp.Service;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;
import javax.transaction.Transactional;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.CommentModel;
import com.examly.springapp.Model.ImageModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Repository.CommentRepository;
import com.examly.springapp.Repository.ImageRepository;

@Service
@Transactional
public class ImageService {
	
	@Autowired
	private ImageRepository imageRepo; 
	
	@Autowired CommentRepository commentRepo;
	
	public void addImage(String name, Blob image, String tag, String email) {
		ImageModel img=new ImageModel(name,image,tag,new UserModel(email));
		
		imageRepo.save(img);
		
	}
	
	/*public void addImage(ImageModel img) {
		imageRepo.save(img);
		
	}*/
	
	public void deleteImage(String id) {
		imageRepo.delete(imageRepo.findByImageId(id));
		
	}
	
	public void updateImage(String id, String name, Blob image, String tag) {
		ImageModel img=imageRepo.findById(id).get();
		
		img.setImage(image);
		img.setImageName(name);
		img.setImageTag(tag);
		
		imageRepo.save(img);
		
	}
	
	/*public void updateImage(ImageModel img) {
		imageRepo.save(img);
	
	}*/
	
	public ImageModel showImage(String id) {
		return imageRepo.findById(id).get();
	}
	
	public List<ImageModel> getImages() { // EXTERNAL DEPENDENCY JACKSON IS USED TO PRINT SUB-OBJECTS
		List<ImageModel> images=new ArrayList<>();
		
		for(ImageModel i:imageRepo.findAll())
		{
			int j;
			
			List<CommentModel> temp=i.getComments();
			List<CommentModel> tempNew=new ArrayList<>();
			
			for(j=0;j<temp.size();j++)
			{
				CommentModel temp1 = new CommentModel();
				
				temp1.setCommentId(commentRepo.findById(temp.get(j).getCommentId()).get().getCommentId());
				temp1.setComment(commentRepo.findById(temp.get(j).getCommentId()).get().getComment());
				temp1.setUserId(new UserModel(commentRepo.findById(temp.get(j).getCommentId()).get().getUserId().getEmail()));

				tempNew.add(temp1);
				
			}
			
			
			
			images.add(new ImageModel(i.getImageId(),i.getImageName(),i.getImageTag(),new UserModel(i.getUserId().getEmail()),tempNew));
		}
		
		return images;
	}
	
	
	public List<ImageModel> getImagesByUser(String email) { 
		List<ImageModel> images=new ArrayList<>();
		
		for(ImageModel i:imageRepo.findAll())
		{
			if(i.getUserId().getEmail().equals(email))
			{
				int j;
				
				List<CommentModel> temp=i.getComments();
				List<CommentModel> tempNew=new ArrayList<>();
				
				for(j=0;j<temp.size();j++)
				{
					CommentModel temp1 = new CommentModel();
					
					temp1.setCommentId(commentRepo.findById(temp.get(j).getCommentId()).get().getCommentId());
					temp1.setComment(commentRepo.findById(temp.get(j).getCommentId()).get().getComment());
					temp1.setUserId(new UserModel(commentRepo.findById(temp.get(j).getCommentId()).get().getUserId().getEmail()));
	
					tempNew.add(temp1);
					
				}
				
				
				
				images.add(new ImageModel(i.getImageId(),i.getImageName(),i.getImageTag(),new UserModel(i.getUserId().getEmail()),tempNew));
			
			}
		}
		
		return images;
	}
}
