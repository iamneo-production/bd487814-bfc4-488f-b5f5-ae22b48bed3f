package com.examly.springapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Model.*;
import com.examly.springapp.Service.*;


@RestController
public class LoginController {
	@Autowired
	private UserService userService;
	
	
	@RequestMapping(value="/login",method=RequestMethod.POST,consumes="application/json",produces="application/json")
	@CrossOrigin(origins = "http://localhost:8081")
	public ResponseEntity<Object> checkUser(@RequestBody LoginModel data){
		if(userService.UserLogin(data))
		{
            return new ResponseEntity<>(true,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
		}
	}
}
