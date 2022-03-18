package com.examly.springapp.Service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Repository.UserRepository;
import com.examly.springapp.Model.*;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
@Transactional
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	@PostConstruct
	public void addAdmin() {
		int flag=0;
		
		for(UserModel i:userRepo.findAll())
		{
			if((i.getEmail().equals("admin")) || (i.getUsername().equals("admin")))
			{
				flag=1;
				break;
			}
		}
		
		if(flag==0)
		{
			UserModel user=new UserModel();
			
			user.setEmail("admin");
			user.setUsername("admin");
			user.setRole("ADMIN");
			user.setActive(false);
			user.setPassword(passwordEncoder.encode("admin"));
			
			userRepo.save(user);
			
		}
	}
	
	public boolean newUserSignUp(UserModel user) {
		for(UserModel i:userRepo.findAll())
		{
			if((i.getEmail().equals(user.getEmail())) || (i.getUsername().equals(user.getUsername())) || (user.getUsername().equals("admin")) || (user.getEmail().equals("admin")))
			{
				return false;
			}
		}
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setActive(false);
		user.setRole("USER");
		userRepo.save(user);
		
		return true;
		
	}
	
	public boolean UserLogin(LoginModel data) {
		for(UserModel i:userRepo.findAll())
		{
			if((i.getEmail().equals(data.getEmail())) && (passwordEncoder.matches(data.getPassword(),i.getPassword())))
			{
				return true;
			}
		}
		
		return false;
		
	}

}
