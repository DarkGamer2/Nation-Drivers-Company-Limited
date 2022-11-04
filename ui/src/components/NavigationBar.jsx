import React from "react";
import Logo from "../images/logo.png";
import "../styles/nav.css";
import { FontAwesomeIcon } from "font-awesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavigationBar=()=>{

    return(
         <section>
         <div className="nav-container">
            <nav>
                <ul>
                    <li className="nav-item"><img className="logo" src={Logo} alt="logo"/></li>
                   
                    <li className="nav-item">NATION DRIVERS COMPANY LIMITED</li>
                     <li className="nav-item"><NavLink style={{textDecoration:"none",color:"red"}} to={"/"}>HOME</NavLink></li>
                   <li className="nav-item"><NavLink style={{textDecoration:"none" ,color:"red"}} to={"/about"}>ABOUT</NavLink></li>
                    {/* <li className="nav-item dropdown">SERVICES <FontAwesomeIcon icon={faCaretDown}/></li> */}
                    <div className="dropdown">
  <button className="dropbtn">SERVICES <FontAwesomeIcon icon={faCaretDown}/></button>
  <div className="dropdown-content">
    <NavLink style={{textDecoration:"none" ,color:"red"}} to="services/course">COURSE</NavLink>
    <NavLink style={{textDecoration:"none" ,color:"red"}} to="services/dvds">DVDS</NavLink>
    <NavLink style={{textDecoration:"none" ,color:"red"}} to="services/signs">SIGNS</NavLink>
  </div>
</div>
                   <li className="nav-item"><NavLink style={{textDecoration:"none" ,color:"red"}} to="/signup">BOOK APPOINTMENT</NavLink></li>
                   <button className="admin-nav-item"><NavLink style={{textDecoration:"none",color:"white"}} to="/adminlogin">ADMIN LOGIN</NavLink></button>
                    </ul>
            </nav>
        </div>
       </section>
    )
}

export default NavigationBar;