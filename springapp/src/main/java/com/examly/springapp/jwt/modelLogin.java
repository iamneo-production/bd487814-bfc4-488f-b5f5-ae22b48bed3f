package com.examly.springapp.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class LoginModel {
	@Id
	private String email;

	private String password;
	
	LoginModel(){
		
	}
	
	public LoginModel(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
