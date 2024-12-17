package com.example.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.BookDto;
import com.example.entity.Authour;
import com.example.entity.Book;
import com.example.exception.ApplicationException;
@Service
public class BookServiceImpl implements BookService{
	@Autowired
	private BookRepository bookRepo;
	private AuthourRepository authRepo;
	@Override
	public Book addBook(BookDto bookDto) {
		Authour a=authRepo.findById(bookDto.getAuthourId()).orElseThrow(()-> new ApplicationException(""));
			Book book=new Book();
		//book.setBookName(bookDto.getBookName());
		//book.setGenre(bookDto.getGenre());
			BeanUtils.copyProperties(bookDto, book); //both class field names & type must same
		book.setAuthor(a);
		return bookRepo.save(book);
	}

}
