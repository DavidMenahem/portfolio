import { useEffect } from "react";
import "./Stock.css"

function Stock(): JSX.Element{
    useEffect(() =>{
        window.scrollTo(0,0,);
    },[]);
    
    return(

        <div className="stock">
            <div className="stock-header">
                <h1>Stock charts</h1>
                <p>A JavaFX gui application, connecting to a stock market api</p>
                <p>Analysing the json data I pulled out the 100 latest prices made a chart</p>
            </div>
            <div className="images">
            <figure className="figure">
                    <figcaption className="caption">Stock chart and information</figcaption>
                    <img src="https://i.ibb.co/nCThXX9/stock-chart-big.png" alt="Folder view" width={1024} height={768} title="Companies list"></img>
                </figure> 
            </div> 
        </div>
    );
}
export default Stock;