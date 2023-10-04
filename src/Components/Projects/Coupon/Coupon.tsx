import { useEffect } from "react";
import "./Coupon.css"

function Coupon(): JSX.Element{
    useEffect(() =>{
        window.scrollTo(0,0,);
    },[]);
    
    return(<div className="coupon">
            <div className="coupon-header">
                <h1>Coupon management system</h1>
                <p>A simluation for managing coupons between customers and companies</p>
                <p>A React single page web app with a Java api and MySql database</p>
            </div>
            <div className="coupon-links">
                <a href="https://github.com/dvmena36/coupons" target="_blank">Backend code</a>
                <a href="https://github.com/dvmena36/coupons-site" target="_blank">Frontend code</a>
            </div>
            <div className="images">
                <figure className="figure">
                    <figcaption className="caption">Add a coupon</figcaption>
                    <img src="https://i.ibb.co/FDwYXkz/coupon-add-big.png" alt="Add coupon" title="Add a coupon" width="1024" height="768"></img>
                </figure>
                <figure className="figure">
                    <figcaption className="caption">Login to coupon system</figcaption>
                    <img src="https://i.ibb.co/dQ4kN5L/coupon-login-big.png" alt="Login coupon" title="Login" width={1024} height={768}></img>
                </figure>
                <figure className="figure">
                    <figcaption className="caption">List of companies</figcaption>
                    <img src="https://i.ibb.co/C7TRk7k/coupon-companies-big.png" alt="List of companaies" width={1024} height={768} title="Companies list"></img>
                </figure>
            </div>
        </div>);
}
export default Coupon;