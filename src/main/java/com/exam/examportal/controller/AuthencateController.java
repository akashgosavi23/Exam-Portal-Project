package com.exam.examportal.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exam.examportal.config.JwtUtil;
import com.exam.examportal.helper.UserFoundException;

import com.exam.examportal.model.JwtRequest;
import com.exam.examportal.model.JwtResponce;
import com.exam.examportal.model.User;
import com.exam.examportal.service.impl.UserDetailsServiceImpl;


@RestController
@CrossOrigin("*")
public class AuthencateController {
	
	

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Autowired
	private JwtUtil jwtUtil;

	
	
	//generate token
	@PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
    	
    	try {
    		
    		authanticate(jwtRequest.getUsername(), jwtRequest.getPassword());
    		
    	}catch(UserFoundException e){
    		
    		
             System.out.println("user is already present !!");
    		throw new UserFoundException();
    	}
    	
    	UserDetails userDetails=this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
    	String token=this.jwtUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponce(token));
    	
    	
    }
	
	private void authanticate(String username,String password) throws Exception
	{
		
		try {
			
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		}
		catch(DisabledException e)
		{
			throw new Exception("USER DISABLED"+e.getMessage());
			
		}
		catch(BadCredentialsException e)
		{
			throw new Exception("Invalid Credentials"+e.getMessage());
			
		}
		}
	
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		return (User) this.userDetailsService.loadUserByUsername(principal.getName());
	}
	
		
	}


