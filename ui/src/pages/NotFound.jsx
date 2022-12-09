import CarCrash from "../images/car_crash.png";
import { useNavigate } from "react-router-dom";
import "../styles/notFound.css"
const NotFound=()=>{

    const navigate=useNavigate()

    const goHome=()=>{
        navigate("/");
    }
    return(
        <div>
            <div className="crash-image">
                <img src={CarCrash} alt="Car Crash"/>
            </div>
            <h1>404</h1>
            <p>The page you requested was not found.</p>
           <div className="button-container">
             <button className="goHomeButton" onClick={goHome}>Go Home</button>
           </div>
            </div>
    );
};

export default NotFound;
