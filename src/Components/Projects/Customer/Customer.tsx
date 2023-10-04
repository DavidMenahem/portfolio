import { useEffect } from "react";
import "./Customer.css"


function Customer():JSX.Element{
    useEffect(()=>{
        window.scrollTo(0,0);
},[]);
    return(<div className="customer">
            <div className="customer-header">
                <h1>Customer file manager</h1>
                <p>A file management system that adds customers and cases, creates folders with the information including an excel sheet</p>
                <p>A Java gui application</p>
            </div>
            <div className="images">
            <figure className="figure">
                    <figcaption className="caption">Main page</figcaption>
                    <img src="https://i.ibb.co/MD05GbR/customer-main-big.png" alt="Main page" width={1024} height={768} title="Companies list"></img>
                </figure>                <figure className="figure">
                    <figcaption className="caption">Add a customer</figcaption>
                    <img src="https://i.ibb.co/47T6QVq/customer-add-big.png" alt="Add a customer" width={1024} height={768} title="Companies list"></img>
                </figure>                <figure className="figure">
                    <figcaption className="caption">Folder view</figcaption>
                    <img src="https://i.ibb.co/Bs3Yk7r/customer-folder-big.png" alt="Folder view" width={1024} height={768} title="Companies list"></img>
                </figure>
            </div>
        </div>);
        
}
export default Customer;