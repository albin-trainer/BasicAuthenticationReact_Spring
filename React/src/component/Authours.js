import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import AuthourCard from "./AuthourCard";

function Authours(){
    let apiService=new ApiService();
    let [authours,setAuthours]=useState([]);
    useEffect( ()=>{ 
        console.log("rendering");
 //then is the function of Promise
        apiService.getAllAuthours().
        then((res)=>{
          setAuthours(res.data);
        } ).
        catch(err=>{alert(err);
          console.log(err);
        });

     },[]);
    return <>
        <h1>Authours component</h1>
      {
        authours.map(a=> <AuthourCard authour={a}/>)
      }
    </>
   
}
export default Authours;