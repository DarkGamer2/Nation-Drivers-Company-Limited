import axios from "axios";
import { useState } from "react";
import RecordCard from "./RecordCard";
import { useEffect } from "react";
import "../../styles/RecordList.css"
const RecordList=()=>{
    const API_URL="http://localhost:5000/api/admin/dashboard/viewrecords";
   const [data,setData]=useState([]);
   const [loading,setLoading]=useState(false);
  
 useEffect(()=>{
  setLoading(true);
 axios.get(API_URL,data).then((res)=>{
    setData(res.data);
    setLoading(false);
    console.log(res);
  })

 },[data]);
  return(
    <div>
      <h2>Records</h2>
        <div className="record-list">
       {loading ? <p>Loading...</p>:(
        data.map((record,id)=>{
        return(
          <RecordCard  key={id} id={record._id} name={record.studentFullName}/>
        )
      }))}
       
      </div>
    </div>
  )
}

export default RecordList;