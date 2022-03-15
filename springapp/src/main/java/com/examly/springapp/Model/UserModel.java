package com.examly.springapp.Model;

import javax.persistence.Column;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name="users")
public class UserModel {
	
	 	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="email")
	    private String email;

	    @Column(name="password")
	    private String password;

	    @Column(name="username")
	    private String username;

	    @Column(name="mobileNumber")
	    private String mobileNumber;

	    @Column(name="active")
	    private boolean active;

	    @Column(name="role")
	    private String role;

	    @Column(name="reset_password_token")
	    private String resetPasswordToken;
	    
	    UserModel(){
	    	
	    }

		UserModel(String email, String password, String username, String mobileNumber, boolean active,
				String role, String resetPasswordToken) {
			super();
			this.email = email;
			this.password = password;
			this.username = username;
			this.mobileNumber = mobileNumber;
			this.active = active;
			this.role = role;
			this.resetPasswordToken = resetPasswordToken;
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

		public String getResetPasswordToken() {
			return resetPasswordToken;
		}

		public void setResetPasswordToken(String resetPasswordToken) {
			this.resetPasswordToken = resetPasswordToken;
		}
	    
}
