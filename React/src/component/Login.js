import React, { useState } from "react";
import axios from "axios";
import ApiService from "../services/ApiService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
let api=new ApiService();
let navigate= useNavigate();
  const handleLogin =  () => {

   api.login(username,password).then(res=>{
    alert(res.data)
    if(res.data=="Success"){
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("isLoggedIn","true");
   navigate("/authours");
   window.location.reload();
    }
    else
    alert("Login Failed");;

}).
   catch (error=> {
      // Handle error (e.g., unauthorized)
      if (error.response && error.response.status === 401) {
        setResponseMessage("Unauthorized: Invalid credentials");
      } else {
        setResponseMessage("An error occurred");
      }
    })
};
  

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React Client for Basic Authentication</h2>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} style={{ marginTop: "10px" }}>
        Login
      </button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Login;