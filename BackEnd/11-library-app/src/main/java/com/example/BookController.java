package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.BookDto;
import com.example.entity.Book;
import com.example.service.BookService;
@RestController
@RequestMapping("/books")
@CrossOrigin
public class BookController {
	@Autowired
  private BookService bookService;
	@PostMapping
	public Book addBook(@RequestBody BookDto dto) {
		return bookService.addBook(dto);
	}
}
