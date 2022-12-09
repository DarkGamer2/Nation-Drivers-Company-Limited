
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import CertificateImage from "../images/certificate.jpeg";
import { useNavigate } from 'react-router-dom';
import "../styles/home.css";
import DVDImage from "../images/DVD.jpeg";
import RoadSafetyCreed from '../components/RoadSafetyCreed';
import GoSign from "../images/Go_Sign.jpg";
import LocalPropectous from "../images/Local_Propectious-2.jpg";
import EmailAdvertisement from "../images/Email_Advertisement.jpg";
const Home=()=>{

  const navigate = useNavigate();

  const Redirect=()=>{
    navigate('services/course');
  };

  const DVDRedirect=()=>{
    navigate("services/dvds");
  };

   const SignRedirect=()=>{
    navigate("services/signs");
  };
    return(
       <div>
         <NavigationBar/>
          <div className='certificate-section'>
       <div className="container">
         <h1 className='title'>CALLING ALL DRIVERS!</h1>
       <div className="image-container">
         <img src={EmailAdvertisement} className="advertisement-image center" alt="certificate"/>
       </div>
         <section className='certificate-section'>
       <div className="container">
         <h1 className='title'>GET CERTIFIED TODAY!</h1>
       <div className="image-container">
         <img src={CertificateImage} className="certificate-image certificate-propectous" alt="certificate"/>
        <img src={LocalPropectous} className="local-image certificate-propectous" alt="local propectous"/>
       </div>
        <div className='certificate-description'>
          <p className='certificate-description-text'>
            Nation Drivers Company Limited will be offering Road Safety and Defensive Driving
            courses to the general public every Wednesday and Saturday from 9am to 12pm. Classes will be held at the
            PTSC Mall in San Juan "Croisee". Certificates will be distributed to students immediately upon completion of the course. The cost of the workshop
            is <b>$350.00 TTD</b>.
          </p>
        </div>
        <div className="button-container">
          <button type="submit" className="more-details-button" onClick={Redirect}>MORE DETAILS</button>
        </div>
       </div>
         </section>
         <section className="dvd-section">
          <h1 className='title'>WE ALSO HAVE DVDS!</h1>
          <div className="image-container">
      <img src={DVDImage} className="dvd-image center" alt="dvd" />
          </div>
          <div className="text-container">
            <span className="dvd-description-text">
            <p>We also have local road safety DVD's on sale. Starting at <b>$40.00 TTD</b>.</p>
          </span>
          </div>
          <div className="button-container">
            <button type='submit' onClick={DVDRedirect} className="more-details-button">MORE DETAILS</button>
          </div>
         </section>
           <section className="sign-section">
          <h1 className='title'>WE ALSO HAVE SIGNS!</h1>
          <div className="image-container">
      <img src={GoSign} className="sign-image center" alt="dvd" />
          </div>
          <div className="text-container">
            <span className="sign-description-text">
            <p>We also have road signs that are perfect for giving practical driving instructions.</p>
          </span>
          </div>
          <div className="button-container">
            <button type='submit' onClick={SignRedirect} className="more-details-button">MORE DETAILS</button>
          </div>
         </section>
         <section className="creed-section">
           <RoadSafetyCreed/>
         </section>
        <Footer/>
       </div>
      </div>
      </div>
    )
}

export default Home;

