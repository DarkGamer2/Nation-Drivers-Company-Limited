import {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/adminLoginForm.css";

const AdminLoginForm=()=>{
    const [adminUserName,setAdminUserName]=useState("");
    const [adminPassword,setAdminPassword]=useState("");
    const [buttonColor,setButtonColor]=useState("mediumvioletred");
    const [buttonText,setButtonText]=useState("LOGIN");
    const [errorMessage,setErrorMessage]=useState("");
    const navigate=useNavigate();
    
    const APIURL="http://localhost:5000/api"

    const errorHandling=()=>{
         setButtonText(buttonText) 
                setButtonColor(buttonColor)
                return(
                    <div className="alert alert-danger">
                        <p>{setErrorMessage("Invalid Credentials")}</p>
                    </div>
                )
    }
    const handleLogin=async(e)=>{
        e.preventDefault();

       await axios.post(`${APIURL}/adminlogin`,{
        adminUserName:adminUserName,
        adminPassword:adminPassword,

       },setButtonText("LOGGING IN..."),setButtonColor("green")).then((err)=>{
           if(err){
               setTimeout(errorHandling,3000);
            }
            else{
                navigate("/dashboard")
            }
       })
    }
return (
    <section>
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="adminUserName">Admin ID Number: </label>
                <input type="text" name="adminUserName" className="form-control input-box" placeholder="100001" onChange={(e)=>setAdminUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="adminPassword">Admin Password: </label>
                    <input type="password" name="adminPassword" className="form-control input-box" placeholder="****" onChange={(e)=>setAdminPassword(e.target.value)}/>
                </div>
                <div className="button-container">
                    <button type="submit" className="submit-button" style={{backgroundColor:buttonColor}} onClick={handleLogin}>{buttonText}</button>
                </div>
                <div className="error-message-container">
                    <p className="errorMessage">{errorMessage}</p>
                </div>
            </form>
        </div>
    </section>
)
}

export default AdminLoginForm;