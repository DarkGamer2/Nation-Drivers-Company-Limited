import StopSign from "../images/Stop_Sign.jpg";
import GoSign from "../images/Go_Sign.jpg";
import "../styles/signs.css"

const SignsComponent=()=>{

    return(
        <div>
            <h1 className="signs-header">SIGNS FOR SALE</h1>

            <div className="sign-image">
                <img className="signImage center" src={StopSign} alt="stop sign"/>
            </div>
            <div className="sign-description">
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nulla incidunt consequuntur. Unde sed minima earum. Voluptates enim illo molestiae maiores ipsa commodi temporibus magnam dolorem quia fugiat, odit explicabo!</p>
            </div>

             <div className="sign-image">
                <img className="signImage center" src={GoSign} alt="stop sign"/>
            </div>
            <div className="sign-description">
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nulla incidunt consequuntur. Unde sed minima earum. Voluptates enim illo molestiae maiores ipsa commodi temporibus magnam dolorem quia fugiat, odit explicabo!</p>
            </div>
        </div>
    )
}

export default SignsComponent;