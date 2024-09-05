import { FcSearch } from "react-icons/fc";

export default function Banner() {
    return(
        <>
            <div className="banner">
                <video className="hospitalvideo" src="https://hhinternet.blob.core.windows.net/uploads/2022/06/nyc-health-hospitals-intro-video.mp4" muted="true" autoplay="true" loop playsinline="true" ></video>
                <div className="board">
                    <div className="innerboard">
                        <p>FIND A DOCTOR</p>
                        <div className="innerboard2">
                            <input className="boardelement input" placeholder="NAME OF HOSPITAL"></input>
                            <input className="boardelement input" placeholder="DEPARTMENT OF INTEREST"></input>
                            <input className="boardelement input" placeholder="NAME OF DOCTOR"></input>
                            <button className="boardelement button">Search<FcSearch /></button>
                        </div>
                    </div>
                </div>
                <p className="slogan1" >We Keep Delhi Healthy</p>
                <br></br>
                <p className="slogan2">The nation’s largest municipal health system empowering Delhites to live their healthiest life.</p>
            </div>
            
        </>
    );
}