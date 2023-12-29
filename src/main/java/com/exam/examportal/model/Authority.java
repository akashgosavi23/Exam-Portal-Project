package com.exam.examportal.model;

import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority {
	
	private String authority;

	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		
		return this.authority;
	}

	public Authority(String authority) {
		super();
		this.authority = authority;
	}

	
	

}
