import { useParams } from "react-router-dom";
import "./ImageB.css"
function ImageB(): JSX.Element{
    const params = useParams()
    const link = params.link;
    return(
        <div className="image-container">
            <img src={"/public/images/" + link} alt={link} width="100%"></img>
        </div>
    )
}
export default ImageB;