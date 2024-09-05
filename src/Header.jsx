import { BsDpadFill } from "react-icons/bs";
import { FcPhone } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import './App.css'
export default function Header() {

    return(
        <div className="header">
            <div className = "flexcontainer1">
            <h3><a><p>DELHI <BsDpadFill /><br></br>HEALTH DEPARTMENT</p></a></h3>
                <h3><a><p><FcPhone />Call for an appointment</p></a></h3>
                <h3><a><p><FcCalendar />Make an appointment online</p></a></h3>
            </div>
            {/* <hr></hr> */}
            <hr className="hr"></hr>
        </div>
    
    );
}