package com.examly.springapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Model.*;
import com.examly.springapp.Repository.UserRepository;
import com.examly.springapp.Security.JwtUtil;
import com.examly.springapp.Service.*;

@RestController
public class LoginController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtTokenUtil;
	
	
	@RequestMapping(value="/login",method=RequestMethod.POST) // CHECKS WHETHER THE USERNAME AND PASSWORD MATCHES OR NOT
	@CrossOrigin(origins = "http://localhost:8081")
	public ResponseEntity<?> checkUser(@RequestBody LoginModel data){ 
		/*try {
			authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword())
			);
			
			final UserDetails userDetails = userDetailsService
					.loadUserByUsername(data.getEmail());
			
			final String jwt = jwtTokenUtil.generateToken(userDetails);
			
			return new ResponseEntity<>(true,HttpStatus.OK);
		}
		
		catch (Exception e) {
			return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
		}*/
		
		//System.out.println("HELLO\n\n\n");
		
		if(userService.checkUser(data))
		{
			final UserDetails userDetails = userDetailsService
					.loadUserByUsername(data.getEmail());
			
			final String jwt = jwtTokenUtil.generateToken(userDetails);
			
			//System.out.println(jwt);
			
            return new ResponseEntity<>(new LoginResponseModel(true,jwt,userService.getUserRole(data)),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(new LoginResponseModel(false),HttpStatus.OK);
		}
	}
}
