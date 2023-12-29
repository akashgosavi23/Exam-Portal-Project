package com.exam.examportal.helper;

public class UserNotFoundException extends Exception {

	public UserNotFoundException() {
		super("user with this Username not found in DB...");
	}
	
	public UserNotFoundException(String msg) {super(msg);}

}
