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

import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	
	@RequestMapping(value="/admin",method=RequestMethod.GET) // RETRIEVES ALL AVAILABLE USERS
	@CrossOrigin(origins = "http://localhost:8081")
	public List<UserModel> getUser() {
		return userService.getUser();
	}
	
	
	@RequestMapping(value="/admin/delete/{id}",method=RequestMethod.DELETE) // DELETES A USER - ID
	@CrossOrigin(origins = "http://localhost:8081")
	public void userDelete(@PathVariable String id) { 
		userService.userDelete(id);
	}
	
	@RequestMapping(value="/admin/add",method=RequestMethod.POST) // ADMIN HAS THE PRIVILGE TO ADD NEW USER
	@CrossOrigin(origins = "http://localhost:8081")
	public void userEditSave(@RequestBody UserModel user) {
		userService.userEditSave(user);
	}
	
	@RequestMapping(value="/admin/userEdit/{id}",method=RequestMethod.PUT)
	@CrossOrigin(origins = "http://localhost:8081")
	public void userEdit(@RequestBody UserModel user,@PathVariable String id) { // ADMIN HAS THE PRIVILGE TO EDIT USER DETAILS
		userService.userEdit(user);
	}
	
}
