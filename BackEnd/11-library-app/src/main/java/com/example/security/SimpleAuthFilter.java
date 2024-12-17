package com.example.security;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.servlet.*;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.util.Base64;
import java.util.Enumeration;
@Component
@CrossOrigin
public class SimpleAuthFilter  implements Filter {
	  @Override
	    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
	            throws IOException, ServletException {
		  System.out.println("**Filter**");
	        HttpServletRequest httpRequest = (HttpServletRequest) request;
	        HttpServletResponse httpResponse = (HttpServletResponse) response;
	        System.out.println(httpRequest.getRequestURI());
	        if(httpRequest.getRequestURI().equals("/login")) {
	        	
	        	  chain.doFilter(request, response);
	        	  return;
	        }
	        else {
	        	 // Allow OPTIONS requests to pass through
	            if ("OPTIONS".equalsIgnoreCase(httpRequest.getMethod())) {
	            	System.out.println("OPTIONS...");
	                httpResponse.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	                httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	                httpResponse.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
	                httpResponse.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials

	                httpResponse.setStatus(HttpServletResponse.SC_OK);
	                return;
	            }

	        	   // Log all headers for debugging
	            Enumeration<String> headerNames = httpRequest.getHeaderNames();
	            System.out.println("**HEaders **");
	            while (headerNames.hasMoreElements()) {
	                String headerName = headerNames.nextElement();
	                System.out.println(headerName + ": " + httpRequest.getHeader(headerName));
	            }
	        // Get the Authorization header
	        String authHeader = httpRequest.getHeader("Authorization");
	        System.out.println(authHeader);
	        if (authHeader != null && authHeader.startsWith("Basic ")) {
	            // Decode the Base64 encoded credentials
	            String base64Credentials = authHeader.substring(6);
	            String credentials = new String(Base64.getDecoder().decode(base64Credentials));
	            String[] parts = credentials.split(":");

	            // Check username and password
	            String username = parts[0];
	            String password = parts[1];
	            System.out.println(username);
	            System.out.println(password);
	            //connect with the DB ...(call the DAO)
	            if ("Albin".equals(username) && "Blr".equals(password)) {
	                // Allow the request to proceed
	                chain.doFilter(request, response);
	                return;
	            }
	        }
	       // chain.doFilter(request, response);
	        // Reject unauthorized requests
	        httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
	        httpResponse.getWriter().write("Unauthorized");
	        }
	    }
}
