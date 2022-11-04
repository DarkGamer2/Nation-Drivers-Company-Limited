import "../../styles/RecordCard.css"
import axios from "axios";


let API_URL="http://localhost:5000/api/";

const RecordCard=(props)=>{
    let id=props.id;
    
    const deleteRecord=async ()=>{
        await axios.delete(`${API_URL}admin/dashboard/viewrecords/${id}`).then((record)=>{
            alert(`${record} deleted successfully`)
        })
    }
    return(
        <div className="record-container">
            <div className="record-details">
                <h2>{props.name}</h2>
            </div>
            <div className="main-buttons-container">
                <div className="button-container">
                    <button className="update">Update</button>
                </div>
                <div className="button-container">
                    <button className="view">View</button>
                </div>
                <div className="button-container">
                    <button className="delete" onClick={deleteRecord}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default RecordCard;