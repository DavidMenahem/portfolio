
import "./Coupon.css"

function Coupon(): JSX.Element{

    return(<div className="coupon">
            <div className="coupon-header">
                <h1>Coupon management system</h1>
                <h2>Buy and sell coupons</h2>
            </div>
            <div className="coupon-links">
                <a href="https://github.com/dvmena36/coupons" target="_blank">Backend source code</a>
                <a href="https://github.com/dvmena36/coupons-site" target="_blank">Frontend source code</a>
            </div>
            <div className="coupon-images">
            <a href="https://i.postimg.cc/wtXRs3MG/coupon-companies-big.png">
                <img src="https://i.postimg.cc/wtXRs3MG/coupon-companies-big.png" alt="" className="coupon-image"/>
            </a>
            <a href="https://i.postimg.cc/5625d5yN/coupon-add-big.png">
                <img src="https://i.postimg.cc/5625d5yN/coupon-add-big.png" alt="" className="coupon-image"/>
            </a>
            <a href="https:\//i.postimg.cc/Vrzr91bL/coupon-login-big.png">
                <img src="https:\//i.postimg.cc/Vrzr91bL/coupon-login-big.png" alt="" className="coupon-image"/>
            </a>
            </div>
        </div>);
}
export default Coupon;