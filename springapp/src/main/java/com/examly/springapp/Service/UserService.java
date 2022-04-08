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
	
	public String getUserRole(LoginModel data) {
		return userRepo.findByEmail(data.getEmail()).getRole();
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
	
	public boolean userEditSave(UserModel user) {
		for(UserModel i:userRepo.findAll())
		{
			if((i.getEmail().equals(user.getEmail())) || (user.getEmail().equals("admin")) || (i.getUsername().equals(user.getUsername()))) // CHECKS WHETHER THE EMAIL AND USERNAME ALREADY EXISTS OR NOT
			{
				return false;
			}
		}
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		if(user.getRole().toLowerCase().equals("user"))
		{
			user.setRole("ROLE_USER");
		}
		else if(user.getRole().toLowerCase().equals("admin"))
		{
			user.setRole("ROLE_ADMIN");
		}
		
		user.setActive(false);
		
		
		userRepo.save(user);
		
		return true;
	}

	public boolean userEdit(UserModel user, String id) {
		for(UserModel i:userRepo.findAll())
		{
			if(userRepo.findByEmail(id).getUsername().equals(user.getUsername()))
			{
				continue;
			}
			
			if(i.getUsername().equals(user.getUsername())) // CHECKS WHETHER THE USERNAME ALREADY EXISTS OR NOT
			{
				return false;
			}
		}
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		userRepo.findByEmail(id).setMobileNumber(user.getMobileNumber());
		
		if(user.getRole().toLowerCase().equals("user"))
		{
			user.setRole("ROLE_USER");
		}
		else if(user.getRole().toLowerCase().equals("admin"))
		{
			user.setRole("ROLE_ADMIN");
		}
		
		userRepo.save(user);
		
		return true;
		
	}
	
	
	public UserModel getUserDetails(String email) {
		return userRepo.findByEmail(email);
	}

}
