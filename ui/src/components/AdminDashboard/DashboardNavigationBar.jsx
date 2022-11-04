import { FontAwesomeIcon } from "font-awesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import "../../styles/dashboardNav.css"
const DashboardNavigationBar=()=>{

    return(
        <div className="dash-nav-container">
            <nav>
                <li className="record-icon icon"><FontAwesomeIcon icon={faFileLines}/></li>
                <li></li>
                <li className="door-icon icon"><FontAwesomeIcon icon={faDoorOpen}/></li>
                <li className="gear-icon icon"><FontAwesomeIcon icon={faGear}/></li>
            </nav>
        </div>
    )
}

export default DashboardNavigationBar;