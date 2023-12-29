package com.exam.examportal.model;

public class JwtResponce {
	String token;

	public JwtResponce() {
		
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public JwtResponce(String token) {
		super();
		this.token = token;
	}

}
