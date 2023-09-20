import "./Gadget.css"

function Gadget(): JSX.Element{
    return(<div className="gadget">
        <div className="gadget-header">
            <h1>The gadget finder app</h1>
            <h2>Simulate locating your gadgets</h2>
        </div>
        <div className="gadget-links">
            <a href="https://github.com/dvmena36/The_gadjet_finder2_app" target="_blank">Android app repository in Kotlin</a>
            <a href="https://github.com/dvmena36/gadget_finder1" target="_blank">Backend API in Java</a>
            <a href="https://play.google.com/store/apps/details?id=com.david.thegadjetfinder&pli=1" target="_blank">Download from Google play</a>
        </div>
        <div className="gadget-images">
            <img src="/public/images/gadget-login.png" className="image-gadget"></img>
            <img src="/public/images/gadget-add.png" className="image-gadget"></img>
            <img src="/public/images/gadget-locate.png" className="image-gadget"></img>
        </div>
    </div>);
}
export default Gadget;