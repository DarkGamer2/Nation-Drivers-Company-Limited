import "../styles/course.css"
import { FontAwesomeIcon } from "font-awesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
const CourseDetails=()=>{

    return(
        <section className="course details">
            <h1 className="course-header">ABOUT THE COURSE</h1>
            <div className="first-part">
                <h1 className="course-part-header">ACTION TAKEN POST ACCIDENT</h1>
                <h4 className="course-name-subheader">An Emergency Management Technician would be giving talk about the following subjects :</h4>
                <div className="action-taken-list">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> When An Ambulance Is Called</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Questions Asked By Dispatcher</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Unit Arrives On Scene</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Re-assurance To Patient's Relatives</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Role Of The EMS (Emergency Management Services)</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Personal Items</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Patients Handed Over</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> De-briefing Of EMT's (Emergency Management Technicians)</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> he Bigger Picture</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Post Traumatic Stress Disorder</li>
                    </ul>
                </div>
            </div>
            <div className="second-part">
                <h1 className="course-part-header">DEFENSIVE DRIVING</h1>
                <div className="defensive-list">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Definition</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Pre-Trip Inspection</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Planning the trip ahead</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Hazards</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Aqua Plaining</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Tail Gating</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Following Distance</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Stopping Distance</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Over Driving Your Lights</li>
                    </ul>
                </div>
            </div>
            <div className="third-part">
                <h1 className="course-part-header">SOCIAL & ECONOMIC EFFECTS OF ROAD ACCIDENTS</h1>
                <div className="social-economic-list">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Funeral Expenses</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Medical Expenses</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Disability Expenses</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Law Enforcement</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Loss Of Income</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Vehicle Repairs</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Increased Insurance Premiums</li>
                    </ul>
                </div>
            </div>
            <div className="fourth-part">
                <h1 className="course-part-header">CONDITIONS THAT DRIVE US</h1>
                <div className="conditions-list">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Road Conditions</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Light Conditions</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Traffic Conditions</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Weather Conditions</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Drugs and their possible effects on the driver</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Sharing the road with Motorcycles</li>
                    </ul>
                </div>
            </div>
            <div className="fifth-part">
                <h1 className="course-part-header">SHORT FILM</h1>
                <ul>
                    <li><FontAwesomeIcon icon={faCheckSquare}/> Behavioral attiudes of Drivers,Passengers and Pedestrians</li>
                </ul>
            </div>
            <div className="sixth-part">
                <h1 className="course-part-header">ROAD SAFETY</h1>
                <div className="road-safety-list">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Habits to cultivate as pedestrians</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> What Cyclists should know when riding as well as being in charge
                            of a cycle.
                        </li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> As Commuters,displaying safe practices</li>
                    </ul>
                </div>
            </div>
            <div className="final-part">
                <h1 className="course-part-header">GRAPHICS</h1>
                <h4 className="course-name-subheader">Slide Of Still Pictures depicting: </h4>
                <div className="graphics-list">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Crashes</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Mangled Vehicles</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> Fatalities</li>
                        <li><FontAwesomeIcon icon={faCheckSquare}/> National Road Accidents Statistics</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CourseDetails;