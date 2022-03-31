package com.examly.springapp.Model;

public class LoginResponseModel {
	private boolean status;
	private String token;
	private String role;
	
	public LoginResponseModel() {
		
	}
	
	public LoginResponseModel(boolean status) {
		super();
		this.status = status;
	}
	
	public LoginResponseModel(boolean status, String token, String role) {
		super();
		this.status = status;
		this.token = token;
		this.role = role;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
}
