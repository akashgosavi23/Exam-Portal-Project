package com.exam.examportal.helper;

public class UserFoundException extends Exception{
	
	public UserFoundException() {
		super("user with this Username is already there in DB !! try wirh another one..");
	}
	
	public UserFoundException(String msg) {super(msg);}

}
