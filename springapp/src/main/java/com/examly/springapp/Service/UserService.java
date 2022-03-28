package com.examly.springapp.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Repository.UserRepository;
import com.examly.springapp.Model.*;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
@Transactional
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	@PostConstruct
	public void addAdmin() { // IF THE USER ADMIN DOESN'T EXISTS IN THE DATABASE THEN IT WOULD BE AUTOMATICALLY ADDED
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
			user.setRole("ROLE_ADMIN");
			user.setActive(false);
			user.setPassword(passwordEncoder.encode("admin"));
			
			userRepo.save(user);
			
		}
	}
	
	public boolean saveUser(UserModel user) { 
		for(UserModel i:userRepo.findAll())
		{
			if((i.getEmail().equals(user.getEmail())) || (user.getEmail().equals("admin")) || (i.getUsername().equals(user.getUsername()))) // CHECKS WHETHER THE EMAIL AND USERNAME ALREADY EXISTS OR NOT
			{
				return false;
			}
		}
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setActive(false);
		
		if(user.getRole()==null)
		{
			user.setRole("ROLE_USER");
		}
		
		
		userRepo.save(user);
		
		return true;
		
	}
	
	public boolean checkUser(LoginModel data) {
		for(UserModel i:userRepo.findAll())
		{
			if((i.getEmail().equals(data.getEmail())) && (passwordEncoder.matches(data.getPassword(),i.getPassword())))
			{
				return true;
			}
		}
		
		return false;
		
	}
	
	public List<UserModel> getUser() {
		List<UserModel> users=new ArrayList<>();
		
		for(UserModel i:userRepo.findAll())
		{
			users.add(i);
		}
		
		return users;
	}
	
	public UserModel userEditData(String id) {
		return userRepo.findByEmail(id);
	}
	
	public void userDelete(String id) {
		userRepo.delete(userRepo.findByEmail(id));
	}
	
	public void userEditSave(UserModel user) {
		/*for(UserModel i:userRepo.findAll())
		{
			if((i.getEmail().equals(user.getEmail())) || (user.getEmail().equals("admin")))
			{
				
			}
		}
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setActive(false);
		
		if(user.getRole()==null)
		{
			user.setRole("USER");
		}*/
		
		
		userRepo.save(user);
	}

	public void userEdit(UserModel user) {
		userRepo.save(user);
	}

}
