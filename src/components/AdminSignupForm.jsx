import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AdminSignupForm=()=>{

    const APIURL="https://nation-drivers-limited-api-production.up.railway.app/api";
    const [adminUserName,setAdminUserName]=useState("")
    const [adminEmail,setAdminEmail]=useState("")
    const [adminPassword,setAdminPassword]=useState("")
    const [buttonColor,setButtonColor]=useState("blue");
    const [buttonText,setButtonText]=useState("Create Admin Account");

    const navigate=useNavigate();

    const handleSignup=async (e)=>{
        e.preventDefault();

        try {
            const response=await axios.post(`${APIURL}/adminsignup`,{
                adminUserName: adminUserName,
                adminEmail: adminEmail,
                adminPassword: adminPassword
            },setButtonColor("green"),
        setButtonText("Creating Account...")).then((res)=>{
            console.log(res.data);
        })
        console.log(response.data);
        console.log(response.status)
        .then(()=>{
            navigate("/adminlogin");
        })
        } catch (error) {
            console.log(error.response);
        }
    }

return(
    <div>
        <div className="form-container">
            <form onSubmit={handleSignup}>
                   <div className="form-group">
                    <label htmlFor="adminUserName">Admin ID Number: </label>
                <input type="text" name="adminUserName" value={adminUserName} className="form-control input-box" placeholder="100001" onChange={(e)=>setAdminUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="adminEmail">Admin Email: </label>
                    <input type="text" name="adminEmail" value={adminEmail} className="form-control" placeholder="Admin Email" required="required" onChange={(e)=>setAdminEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="adminPassword">Admin Password: </label>
                    <input type="text" name="adminPassword" value={adminPassword} className="form-control input-box" placeholder="****" onChange={(e)=>setAdminPassword(e.target.value)}/>
                </div>
                <div className="button-container">
                    <button type="submit" className="submit-button" style={{backgroundColor:buttonColor}} onClick={handleSignup}>{buttonText}</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default AdminSignupForm;