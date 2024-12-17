package com.example.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.entity.Authour;
import com.example.exception.ApplicationException;

@Service
public class AuthService {
public List<Authour> allAuthours(){
	Authour a1=new Authour(101, "A", LocalDate.now(), "Male");
	Authour a2=new Authour(102, "B", LocalDate.now(), "Female");
	Authour a3=new Authour(103, "D", LocalDate.now(), "Male");
	Authour a4=new Authour(104, "E", LocalDate.now(), "Female");
	Authour a5=new Authour(105, "F", LocalDate.now(), "Male");
	ArrayList<Authour> list=new ArrayList<>();
	list.add(a1);
	list.add(a2);
	list.add(a3);
	list.add(a4);
	list.add(a5);
	return list;
}
}
