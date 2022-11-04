
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import CertificateImage from "../images/certificate.jpeg";
import { useNavigate } from 'react-router-dom';
import "../styles/home.css";
import DVDImage from "../images/DVD.jpeg";
import RoadSafetyCreed from '../components/RoadSafetyCreed';
import GoSign from "../images/Go_Sign.jpg";
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
         <section className='certificate-section'>
       <div className="container">
         <h1 className='title'>GET CERTIFIED TODAY!</h1>
       <div className="image-container">
         <img src={CertificateImage} className="certificate-image center" alt="certificate"/>
       </div>
        <div className='certificate-description'>
          <p className='certificate-description-text'>
            Nation Drivers Company Limited will be offering Road Safety and Defensive Driving
            courses to the general public every Wednesday and Saturday from 9am to 12pm. Classes will be held at the
            PTSC Mall in San Juan "Croisee". Certificates will be distributed to students immediately upon completion of the course.
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
            <p>We also have local road safety DVD's on sale</p>
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
    )
}

export default Home;

