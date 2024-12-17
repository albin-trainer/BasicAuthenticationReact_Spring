import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import { useNavigate, useParams } from "react-router-dom";

function AuthourForm(){ 
    let [authour,setAuthour] = useState({});
    let [msg,setMsg]=useState("");
    let[toDo,setToDo]=useState("ADD");
    let api= new ApiService();
    
    let navigate= useNavigate();
    let [isError,setError]=useState(false);
    let[nameError,setNameError]=useState("");
    let {id}=useParams();//read path variable
    useEffect( ()=>{
        console.log(id);
        if(id!=0){
            setToDo("UPDATE");
            api.getAuthourById(id).
            then((res)=>{
                console.log(res.data);
               setAuthour(res.data);
              })
            .catch(err=>alert(err.response.data));
        }
    },[]);
    let nameHandler=(evt)=>{
        console.log(evt.target.value);
        setAuthour( (prevState)=>{ return {...prevState,authourName:evt.target.value}  } )
       // authour.authourName=evt.target.value;
    }
    let genderHandler=(evt)=>{
       // authour.gender=evt.target.value;
       setAuthour( (prevState)=>{ return {...prevState,gender:evt.target.value}  } )

    }
    let dobHandler=(evt)=>{
      //  authour.dob=evt.target.value;
      setAuthour( (prevState)=>{ return {...prevState,dob:evt.target.value}  } )

    }
    
    let validation=()=>{
        if(authour.authourName=='' || authour.authourName==undefined){
            isError=true;
            setNameError("Please Enter the name");
        }
    }
   let submitHandler=(evt)=>{
        evt.preventDefault();//stop refreshing the page
        console.log(authour);
        validation();
        if(isError==false){
            if(id==0){
            api.addNewAuthour(authour);
            setMsg("Added Successfully")
            alert("Added");
            }
            else{
                //call the api service for update
            }
            navigate("/authours");
        }
        //call servixce
   }
    return <div class="container">
        <h1>Authour Form</h1>
        <div>          
        <form onSubmit={submitHandler} class="authForm col-md-4">
    <div class="mb-3">
        <label for="authourName" class="form-label">Authour Name</label>
        <input value={authour.authourName} type="text"
         class="form-control" id="authourName" onChange={nameHandler}/>  
        <span class="col-md-4">{nameError}</span>
    </div>
  <div class="mb-3">
    <label for="gender" class="form-label">Gender</label>
    <select class="form-control" id="gender" value={authour.gender} onChange={genderHandler} >
        <option></option>
        <option>Male</option>
        <option>Female</option>
    </select>
    </div>
  <div class="mb-3 form-check">
  <label for="dob" class="form-label">Date of Birth</label>
    <input type="date" value={authour.dob} class="form-control" id="dob" onChange={dobHandler}/>    
  </div>
  <button type="submit" class="btn btn-primary">{toDo}</button>
  <div class="mb-3 form-check">
    <div>{msg}</div>
  </div>
</form>
    <img class="authForm col-md-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CsF8p5ZhdFV4L94Ke6ZwobpDsBEo70OmE92ownZt6NybuBXLyk-Xw6aBeyNMcnrQpmo&usqp=CAU"></img>
</div>
    </div>
}
export default AuthourForm;