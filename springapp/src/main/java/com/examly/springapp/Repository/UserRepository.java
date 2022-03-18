package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.Model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel,Long> {
	@Query("SELECT u FROM UserModel u where u.email=?1")
	public UserModel findByEmail(String email);
}
