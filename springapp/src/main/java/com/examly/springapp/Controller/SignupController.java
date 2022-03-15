package com.examly.springapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.examly.springapp.Service.UserService;
import com.examly.springapp.Model.UserModel;

@RestController

public class SignupController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/signup",method=RequestMethod.POST)
	public ResponseEntity<Object> saveUser(@RequestBody UserModel user){
		if(userService.newUserSignUp(user))
		{
			userService.newUserSignUp(user);
            return new ResponseEntity<>(true,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
		}
	}
}
