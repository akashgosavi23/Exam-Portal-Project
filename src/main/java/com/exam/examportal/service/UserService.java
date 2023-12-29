package com.exam.examportal.service;

import java.util.Set;

import com.exam.examportal.model.User;
import com.exam.examportal.model.UserRole;

public interface UserService {
	
	//creating user
	
	public User createUser(User user,Set<UserRole> userRoles) throws Exception;
	
	//get user by username
	public User getUser(String username);
	
	//delete user by id
	void deleteUser(Long userId);
	
	

}
