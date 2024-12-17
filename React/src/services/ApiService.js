import axios from "axios";

let baseURL="http://localhost:8080";

class ApiService{
  getConfig(){
    //reading uname and password from localStorage
    let username=localStorage.getItem("username");
    let password=localStorage.getItem("password");
    //bto  is a function to convert uname and pwd into base64 encoded format
   let credentials=btoa(`${username}:${password}`);
            let config= {
             headers: {
               'Authorization': `Basic ${credentials}`, // Attach Basic Auth header
             }, withCredentials: true, // Ensure credentials are included
           };
 return config;
  }
  getAllAuthours(){
    return axios.get(baseURL+"/authours",this.getConfig());
  }
    addNewAuthour(author){
        axios.post(baseURL+"/authour",author,this.getConfig())
        console.log("Added");
    }
  
  login(username,password){
     // Encode the credentials in Base64
          // Make the request to the Spring Boot API
      return  axios.post("http://localhost:8080/login",{username,password})
  }
  getAuthourById(id){
    return axios.get(baseURL+"/authours/"+id,this.getConfig());
  }

  addNewBook(book){
    return axios.post(baseURL+"/books",book,this.getConfig());
  }
}


export default ApiService;