package com.example;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Login;

@RestController
public class LoginController {
	@PostMapping("/login")
	public String  login(@RequestBody Login login) {
		System.out.println("loginmethod");
		//call dao
		if(login.getUsername().equals("Albin") && login.getPassword().equals("Blr"))
			return "Success";
		return "Failed";
	}
}
