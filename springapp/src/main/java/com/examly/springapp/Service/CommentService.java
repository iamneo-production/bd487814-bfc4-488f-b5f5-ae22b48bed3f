package com.examly.springapp.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.CommentModel;
import com.examly.springapp.Model.ImageModel;
import com.examly.springapp.Repository.CommentRepository;
import com.examly.springapp.Repository.ImageRepository;

@Service
@Transactional
public class CommentService {
	@Autowired
	private CommentRepository commentRepo;
	
	@Autowired
	private ImageRepository imageRepo;
	
	public void addComment(CommentModel comment, String id) {
		commentRepo.save(comment);
		
		ImageModel im = imageRepo.findById(id).get(); // COMMENTS ARE ADDED TO ARRAYLIST OF IMAGEMODEL
		
		im.setComments(comment); 
		
		imageRepo.save(im);
	}
	
	public void deleteComment(String id) {
		commentRepo.delete(commentRepo.findById(id).get());
		
	}
	
	public void updateComment(CommentModel comment, String id) {
		CommentModel commentNew = commentRepo.findById(id).get();
		
		commentNew.setComment(comment.getComment());
		
		commentRepo.save(commentNew);
	}

}
