import "../styles/roadsafety.css"
import CarAccident from "../images/gm-9e90cd29-8417-4dcd-b248-1c09e74470bc-what-to-do-if-you-have-a-car-accident.jpg"
const RoadSafetyDetails=()=>{
    return(
        <section className="road-safety-details">
            <div className="title">
                <h1>A NATIONAL ROAD SAFETY PROGRAMME</h1>
            </div>

                <div className="header">
                    <h2>WHAT THE PROGRAMME HOPES TO ACHIEVE</h2>
                </div>
            <div className="programme-seeks">
                <li>Promote a climate that instills safety consiousness
                    in our youths and public
                </li>
                <li>Develop Safety habits that will be normal for your school
                    and other areas.
                </li>
                <li>To Encourage youth and others to identify and find solutions to road 
                        safety problems in their environment.
                </li>
                <li>To provide driving instructions for youths 16 years and older through community
                    road safety councils.
                </li>
                <li>To create awareness of nighttime clothing for pedestrians</li>
                <li>To develop safety consciousness amongst Truck Drivers, Bus Drivers, Taxi Drivers & Maxi Drivers.</li>
                <li>Encourage the use of seatbelts</li>
            </div>
            <div className="title">
                <h3>SAFETY</h3>
            </div>
            <div className="safety-content">
                <p>The Prevention of accidents and Fatalities on the Nation's roads
                    are of great importance.
                </p>
                <p>Every one of us is required to develop a set of habits from which
                    a safety creed will be formed. 
                </p>
                <p>This creed should result in a subconsious safety check on the 
                    Nation's roads. Care and patience must be
                    the watchwords, and assist the other person to
                </p>
            </div>

            <div className="think-safety-session">
                <h3 className="title">THINK SAFETY</h3>
            </div>
            <div className="think-safety-content">
                <h3 className="bold-heading"><b>THINK! TAKE CARE! DON'T ALLOW THIS TO HAPPEN!</b></h3>
                <img className="center accident-image" src={CarAccident} alt="car accident"/>
                <p>Safety is freedom from any type of danger or injury that can cause loss
                    of life!
                </p>
            </div>
        </section>
    )
}

export default RoadSafetyDetails;