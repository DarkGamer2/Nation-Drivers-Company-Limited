import { FontAwesomeIcon } from "font-awesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import "../../styles/dashboardNav.css"
const DashboardNavigationBar=()=>{

    return(
        <div className="dash-nav-container">
            <nav>
                <li className="record-icon icon"><NavLink to={"records"}><FontAwesomeIcon icon={faFileLines}/></NavLink></li>
                <li></li>
                <li className="door-icon icon"><FontAwesomeIcon icon={faDoorOpen}/></li>
                <li className="gear-icon icon"><NavLink to ={"settings"}><FontAwesomeIcon icon={faGear}/></NavLink></li>
            </nav>
        </div>
    )
}

export default DashboardNavigationBar;