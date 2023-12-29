package com.exam.examportal.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.examportal.helper.UserFoundException;
import com.exam.examportal.model.User;
import com.exam.examportal.model.UserRole;
import com.exam.examportal.repo.RoleRepository;
import com.exam.examportal.repo.UserRepository;
import com.exam.examportal.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		// TODO Auto-generated method stub
		
		User local=this.userRepository.findByUsername(user.getUsername());
		
		if(local!=null) {
			
			System.out.println("user is already present !!");
			throw new UserFoundException();
			
		}
		else {
			//user create
			for(UserRole ur:userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local=this.userRepository.save(user);
		}
		
		return local;
	}
	
	@Override
	public User getUser(String username) {
		return this.userRepository.findByUsername(username);
	}
	
	
	@Override
	public void deleteUser(Long userId) {
		this.userRepository.deleteById(userId);
	}
	
	

}
