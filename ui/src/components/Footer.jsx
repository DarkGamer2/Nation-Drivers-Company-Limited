import React from 'react';
import "../styles/footer.css";
import { FontAwesomeIcon } from 'font-awesome';
const Footer=()=>{

    return(
        <div>
           <footer>
            <div className="footer-container">
            <div className="row">
                <div className="col">
                    <h1 className='footer-title'>LOCATION <div className='underline'><span></span></div></h1>
                   
                    <h4 className='location'>PTSC BUS TERMINAL MALL</h4>
                    <p className='footer-content'>Croisee,San Juan, Suite 24</p>
                    </div>
                    <div className="col">
                        <h1 className='footer-title'>QUALIFIED INSTRUCTOR <div className='underline'><span></span></div></h1>
                       <div className="instructor-container">
                         <p className='footer-content'>STAN HUGGINS AINS. C.P.I.M DIP. INS</p>
                        <p className='footer-content'>ROAD SAFETY AND INSURANCE CONSULTANT</p>
                        <p className='footer-content'>CHIEF EXECUTIVE OFFICER</p>
                       </div>
                    </div>
                    <div className="col">
                        <h1 className='footer-title'>CONTACT US <div className='underline'><span></span></div></h1>
                        <div className="contact-container">
                            <p className='email-address footer-content'>Email: st_huggins@yahoo.com</p>
                        <p className='phone-number footer-content'>Phone Number: 868-296-3087</p>
                         <p className='phone-number footer-content'><FontAwesomeIcon icon="fab fa-whatsapp" /> Number: 868-381-8145</p>
                        </div>
                    </div>
               </div>
               <div className="row">
                <div className="col">
                    <h1 className='footer-title'>USEFUL LINKS <div className='underline'><span></span></div></h1>
                   <p className='footer-content'><a className="link" href="https://www.mowt.gov.tt/#&panel1-1">Ministry Of Works & Transport</a></p>
                </div>
                <div className="col">
                    <h1 className='footer-title'>PLACEHOLDER <div className='underline'><span></span></div></h1>
                </div>
                <div className="col">
                    <h1 className='footer-title'>EMERGENCY NUMBERS <div className='underline'><span></span></div></h1>
                    <div className="numbers-container">
                        <li><p className='footer-content'>Emergency: 911</p></li>
                        <li><p className='footer-content'>Police: 999</p></li>
                        <li><p className='footer-content'>Fire: 990</p></li>
                        <li><p className='footer-content'>Ambulance: 811</p></li>
                        <li><p className='footer-content'>Crime Stoppers: 800-TIPS</p></li>
                        <li><p className='footer-content'>Anti Crime Hotline: 555</p></li>
                        <li><p className='footer-content'>ODPM: 800-ODPM</p></li>
                    </div>
                </div>
               </div>
                <p className='reserved footer-content'> &#169;Copyright 2022,All Rights Reserved</p>
        </div>
           </footer>
        </div>
    )
}

export default Footer;