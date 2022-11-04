import DVD from "../images/DVD.jpeg";
import "../styles/dvd.css"
const DVDSComponent =()=>{

    return(
        <div>
            <h1 className="dvd-header">OUR DVDS</h1>
            <div className="dvd-image">
                <img className="dvdImage center" src={DVD} alt="DVD"/>
            </div>
        <div className="dvd-text">
            <p className="text">
                Our local dvds are perfect for teaching road safety.
            </p>
        </div>
        </div>
    )
}

export default DVDSComponent;