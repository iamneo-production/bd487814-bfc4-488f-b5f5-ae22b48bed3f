package com.examly.springapp.Service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.CommentModel;
import com.examly.springapp.Model.ImageModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Repository.CommentRepository;
import com.examly.springapp.Repository.ImageRepository;
import com.examly.springapp.Repository.UserRepository;

@Service
@Transactional
public class CommentService {
	@Autowired
	private CommentRepository commentRepo;
	
	@Autowired
	private ImageRepository imageRepo;
	
	@Autowired
	private UserRepository userRepo;
	
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
	
	public List<CommentModel> getAllComments() {
		List<CommentModel> comments = new ArrayList<>();
		
		for(CommentModel i:commentRepo.findAll())
		{
			UserModel tempUserModel = new UserModel();
			
			for(UserModel k:userRepo.findAll())
			{
				if((k.getEmail().equals(i.getUserId().getEmail())))
				{
					tempUserModel.setEmail(i.getUserId().getEmail());
					tempUserModel.setUsername(k.getUsername());
					break;
				}
			}
			
			comments.add(new CommentModel(i.getCommentId(),i.getComment(),tempUserModel));
		}
		
		return comments;
	}

}
