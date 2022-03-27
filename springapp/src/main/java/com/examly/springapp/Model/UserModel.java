package com.examly.springapp.Model;

import javax.persistence.Column;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import javax.persistence.Id;

@Entity
@Table(name="users")
public class UserModel {
	
	 	@Id
	 	//@Email
	    @Column(name="email",unique=true)
	    private String email;

	    @Column(name="password")
	    private String password;

	    @Column(name="username",unique=true)
	    private String username;

	    @Column(name="mobileNumber")
	    //@Size(min=10,max=10)
		//@Pattern(regexp = "(^$|[0-9]{10})")
	    private String mobileNumber;

	    @Column(name="active")
	    private boolean active;

	    @Column(name="role")
	    private String role;
	    
	    public UserModel(){
	    	
	    }

		public UserModel(String email, String password, String username, String mobileNumber, boolean active,
				String role) {
			super();
			this.email = email;
			this.password = password;
			this.username = username;
			this.mobileNumber = mobileNumber;
			this.active = active;
			this.role = role;
		}
		
		public UserModel(String email, String password, String username, String mobileNumber) {
			super();
			this.email = email;
			this.password = password;
			this.username = username;
			this.mobileNumber = mobileNumber;
		}
		
		public UserModel(String email, String password, String username, String mobileNumber, String role) {
			super();
			this.email = email;
			this.password = password;
			this.username = username;
			this.mobileNumber = mobileNumber;
			this.role = role;
		}
		
		public UserModel(String email) {
			super();
			this.email = email;
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

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getMobileNumber() {
			return mobileNumber;
		}

		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}

		public boolean isActive() {
			return active;
		}

		public void setActive(boolean active) {
			this.active = active;
		}

		public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}
	    
}
