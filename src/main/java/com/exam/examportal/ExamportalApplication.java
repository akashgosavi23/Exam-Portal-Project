package com.exam.examportal;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.exam.examportal.helper.UserFoundException;
import com.exam.examportal.model.Role;
import com.exam.examportal.model.User;
import com.exam.examportal.model.UserRole;
import com.exam.examportal.service.UserService;

@SpringBootApplication
public  class ExamportalApplication  implements CommandLineRunner{
	
	@Autowired
	private UserService userService; 
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(ExamportalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		try {
	System.out.println("starting code");
		
		User user=new User();		
		user.setFirstName("Akash");
		user.setLastname("Gosavi");
		user.setUsername("akash23");
		user.setPassword(this.bCryptPasswordEncoder.encode("abc"));
		user.setEmail("akashmanohar23@gmail.com");
		user.setPhone("989998888");
		
		Role role1=new Role();
		role1.setRoleId(44L);
		role1.setRoleName("admin");
		
		Set<UserRole>userRoleSet=new HashSet<>();
		UserRole userRole=new UserRole();
		userRole.setRole(role1);
		userRole.setUser(user);
		
		userRoleSet.add(userRole);
		
		User user1=this.userService.createUser(user, userRoleSet);
		System.out.println(user1.getUsername());}
		catch(UserFoundException e) {
			e.printStackTrace();
		}
		
		
		
		
	}

}
