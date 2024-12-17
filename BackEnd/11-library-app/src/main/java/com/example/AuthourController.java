package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.BookDto;
import com.example.entity.Authour;
import com.example.exception.ApplicationException;
import com.example.service.AuthService;

@RestController
@CrossOrigin //permits to access from diff domains ....
public class AuthourController {
	@Autowired
	private AuthService service;
	@PostMapping("/authour")
public void add(@RequestBody  Authour e) {
	System.out.println("s");
	System.out.println(e);
}
	@GetMapping("/authours")
	public List<Authour> allAuthours(){
		System.out.println("fetching all authours");
		return service.allAuthours();
	}
	@GetMapping("/authours/{id}")
	public Authour searchById(@PathVariable  int id) {
	return	service.allAuthours().stream().filter(a->a.getId()==id).findFirst().
			orElseThrow(()-> new ApplicationException("The authour "+id+" not found"));
	}
}
