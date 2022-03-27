package com.examly.springapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Model.CommentModel;
import com.examly.springapp.Model.ImageModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.CommentService;

@RestController
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@RequestMapping(value="/image/{id}",method=RequestMethod.POST) // ADDS A COMMENT TO AN IMAGE - COMMENT, EMAIL
	@CrossOrigin(origins = "http://localhost:8081")
	public void addComment(@RequestBody CommentModel comment, @PathVariable String id){
		commentService.addComment(comment,id);
	}
	
	@RequestMapping(value="/comment/delete/{id}",method=RequestMethod.DELETE) // DELETE A COMMENT - ID
	@CrossOrigin(origins = "http://localhost:8081")
	public void deleteComment(@PathVariable String id){
		commentService.deleteComment(id);
	}
	
	@RequestMapping(value="/comment/update/{id}",method=RequestMethod.PUT) // UPDATES A COMMENT - NEW COMMENT, ID
	@CrossOrigin(origins = "http://localhost:8081")
	public void updateComment(@RequestBody CommentModel comment, @PathVariable String id){
		commentService.updateComment(comment, id);
	}
	
	@RequestMapping(value="/admin/comment",method=RequestMethod.GET) // UPDATES A COMMENT - NEW COMMENT, ID
	@CrossOrigin(origins = "http://localhost:8081")
	public List<CommentModel> getAllComments(){
		return commentService.getAllComments();
	}

}
