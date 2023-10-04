import { useEffect } from "react";
import "./Gadget.css"

function Gadget(): JSX.Element{
    useEffect(() =>{
        window.scrollTo(0,0,);
    },[]);
    
    return(<div className="gadget">
        <div className="gadget-header">
            <h1>The gadget finder app</h1>
            <h2>Simulate locating your gadgets</h2>
        </div>
        <div className="gadget-links">
            <a href="https://github.com/dvmena36/The_gadjet_finder2_app" target="_blank">App Kotlin</a>
            <a href="https://github.com/dvmena36/gadget_finder1" target="_blank">API Java</a>
            <a href="https://play.google.com/store/apps/details?id=com.david.thegadjetfinder&pli=1" target="_blank">Google play</a>
        </div>
        <div className="gadget-images">
            <img src="https://i.ibb.co/RT1FSrR/gadget-login.png" alt="" className="image-gadget"></img>
            <img src="https://i.ibb.co/hDd2bSB/gadget-add.png" alt="" className="image-gadget"></img>
            <img src="https://i.ibb.co/dMMKdsp/gadget-locate.png" alt="" className="image-gadget"></img>
        </div>
    </div>);
}
export default Gadget;