package com.examly.springapp.Service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Repository.UserRepository;
import com.examly.springapp.Model.UserModel;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
@Transactional
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	public boolean newUserSignUp(UserModel user) {
		for(UserModel i:userRepo.findAll())
		{
			if((i.getEmail().equals(user.getEmail())))
			{
				return false;
			}
		}
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setRole("USER");
		userRepo.save(user);
		
		return true;
		
	}

}
