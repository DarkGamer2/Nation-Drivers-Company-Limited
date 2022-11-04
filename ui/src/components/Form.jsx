import {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/form.css";
const Form=()=>{

const [studentName,setStudentName]=useState("")
const [studentEmail,setStudentEmail]=useState("")
const [studentPhoneNumber,setStudentPhoneNumber]=useState("")
const [class_date,setClassDate]=useState("");
const [buttonText,setButtonText]=useState("Create Appointment");
const [buttonColor,setButtonColor]=useState("blue");

const navigate=useNavigate()

const submitAppointmentForm=async (e)=>{

    e.preventDefault();

    const {data}=await axios.post("http://localhost:5000/api/signup",{studentName,studentEmail,studentPhoneNumber,class_date},
    setButtonText("Creating Your Appointment..."),setButtonColor("green"))
    .then(()=>{
        console.log({data});
        navigate("/");
    })
}

    return(
      <section className="form-section">
        <div className='heading'>
            <h1 className="appointment-header">BOOK APPOINTMENT</h1>
        </div>
         <div className="form-container">
        <form>
            <div className="form-group">
                <label htmlFor="studentName">Student Name: </label>
                <input type="text" className="form-control" id="studentName" name='studentName' placeholder='John Doe' onChange={(e)=>setStudentName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="studentEmail">Student Email: </label>
                <input type="email" className="form-control" id="studentEmail" name='studentEmail' onChange={(e)=>setStudentEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="studentPhoneNumber">Student Phone Number: </label>
                <input type="tel" className="form-control" id="studentPhoneNumber" name='studentPhoneNumber' onChange={(e)=>setStudentPhoneNumber(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="class_date">Class Date: </label>
                <input type="date" className="form-control" id="class_date" name="class_date" onChange={(e)=>setClassDate(e.target.value)}/>
            </div>
            <div className="button-container">
                <button type='submit' style={{backgroundColor:buttonColor}} onClick={submitAppointmentForm} className="submit_button">{buttonText}</button>
            </div>
        </form>
       </div>
      </section>
    )
}

export default Form;

