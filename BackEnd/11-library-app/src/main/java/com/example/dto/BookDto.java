package com.example.dto;

public class BookDto {
 private	int id;
 private	String bookName;
 private	String genre;
 private	int authourId;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getBookName() {
	return bookName;
}
public void setBookName(String bookName) {
	this.bookName = bookName;
}
public String getGenre() {
	return genre;
}
public void setGenre(String genre) {
	this.genre = genre;
}
public int getAuthourId() {
	return authourId;
}
public void setAuthourId(int authourId) {
	this.authourId = authourId;
}
@Override
public String toString() {
	return "BookDto [id=" + id + ", bookName=" + bookName + ", genre=" + genre + ", authourId=" + authourId + "]";
}
	
}
