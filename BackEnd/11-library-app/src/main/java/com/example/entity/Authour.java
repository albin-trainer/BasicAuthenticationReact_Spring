package com.example.entity;

import java.time.LocalDate;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Authour {
	@Id
	@GeneratedValue
private int id;
private String authourName;
private LocalDate dob;
private String gender;
public Authour() {
	// TODO Auto-generated constructor stub
}

public Authour(int id, String authourName, LocalDate dob, String gender) {
	super();
	this.id = id;
	this.authourName = authourName;
	this.dob = dob;
	this.gender = gender;
}

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getAuthourName() {
	return authourName;
}
public void setAuthourName(String authourName) {
	this.authourName = authourName;
}
public LocalDate getDob() {
	return dob;
}
public void setDob(LocalDate dob) {
	this.dob = dob;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
@Override
public String toString() {
	return "Authour [id=" + id + ", authourName=" + authourName + ", dob=" + dob + ", gender=" + gender + "]";
}


}
