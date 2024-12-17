import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
function BookForm(){
       let [authours,setAuthours]=useState([]);
       let [book,setBook]=useState({});
       let api=new ApiService();
       useEffect( ()=>{
            //invoke apiservice to get all authours
        api.getAllAuthours().
        then( (res)=>setAuthours(res.data) )
        .catch( (err)=>alert(err.response.data) )
       },[]  );
       let bookNameHandler=(evt)=>{
            book.bookName=evt.target.value;
       }
       let bookGenreHandler=(evt)=>{
        book.genre=evt.target.value;
        }
        let authourHandler=(evt)=>{
            book.authourId=evt.target.value;
       }
       let submitHandler=(evt)=>{
        evt.preventDefault();
        api.addNewBook(book).then( (res)=> alert("Added") );
       }
    return <div class="container">
        <form class="col-md-4" onSubmit={submitHandler}>
    <div class="mb-3">
        <label for="bookName" class="form-label">Book Name</label>
        <input value={book.bookName} type="text" onChange={bookNameHandler}
         class="form-control" id="bookName" />  
           </div>
  <div class="mb-3">
    <label for="genre" class="form-label">Genre</label>
    <select class="form-control" id="genre" onChange={bookGenreHandler}>
        <option></option>
        <option>Fantacy</option>
        <option>Horror</option>
        <option>Thriller</option>
        <option>Comedy</option>
    </select>
    </div>
    <div class="mb-3">
    <label for="authour" class="form-label">Authour</label>
    <select class="form-control" id="authour" onChange={authourHandler}>
        <option></option>       
        {
            authours.map( a => <option  value={a.id} > {a.authourName}  </option>)
        }
    </select>
    </div>
  <button type="submit" class="btn btn-primary">Add Book</button>
  <div class="mb-3 form-check">
    </div>
</form>
    </div>
}
export default BookForm;