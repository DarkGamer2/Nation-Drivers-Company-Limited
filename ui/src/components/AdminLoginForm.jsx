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
    const AdminAccount={adminUserName,adminPassword};
    
    const handleLogin=async(e)=>{
        e.preventDefault();

        await axios.post("http://localhost:5000/api/login",AdminAccount,
            setButtonText("LOGGING IN..."),setButtonColor("green")
        ).then(()=>{
            if(adminUserName===AdminAccount.adminUserName && adminPassword===AdminAccount.adminPassword){
                navigate(`/${adminUserName}/dashboard`);
            }
            else{
                return (
                    <p>{setErrorMessage("Invalid ID Number Or Password")}</p>
                )
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
                    <input type="text" name="adminPassword" className="form-control input-box" placeholder="****" onChange={(e)=>setAdminPassword(e.target.value)}/>
                </div>
                <div className="button-container">
                    <button type="submit" className="submit-button" style={{backgroundColor:buttonColor}} onClick={handleLogin}>{buttonText}</button>
                </div>
                <div className="error-message-container">
                    <p>{errorMessage}</p>
                </div>
            </form>
        </div>
    </section>
)
}

export default AdminLoginForm;