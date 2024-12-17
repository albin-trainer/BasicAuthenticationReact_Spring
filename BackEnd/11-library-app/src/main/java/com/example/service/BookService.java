package com.example.service;

import com.example.dto.BookDto;
import com.example.entity.Book;

public interface BookService {
Book addBook(BookDto bookDto);
}
