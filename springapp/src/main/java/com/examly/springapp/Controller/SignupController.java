package com.examly.springapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.examly.springapp.Model.*;
import com.examly.springapp.Service.*;


@RestController

public class SignupController {
	
	@Autowired
	private UserService userService;
	
	
	@RequestMapping(value="/signup",method=RequestMethod.POST) // USE TO STORE A NEW USER IN THE DATABASE
	@CrossOrigin(origins = "http://localhost:8081")
	public ResponseEntity<Object> saveUser(@RequestBody UserModel user){
		if(userService.saveUser(user))
		{
            return new ResponseEntity<>(true,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(false,HttpStatus.OK);
		}
	}
}
