import { Routes,Route } from "react-router-dom"
import Gadget from "../../Projects/Gadget/Gadget"
import Carousel from "../../Carousel/Carousel"
import {slides} from "../../../data/slides/carouselData.json"
import {customerSlides} from "../../../data/slides/customerData.json"
import {couponSlides} from "../../../data/slides/couponData.json"
import Customer from "../../Projects/Customer/Customer"
import ImageB from "../../Image/ImageB"
import Coupon from "../../Projects/Coupon/Coupon"

function Routing(): JSX.Element{
    return <>
            <div className="Routing">
                <Routes>
                    <Route path="/" element = {<Carousel data={slides} /> }></Route>
                    <Route path="/the_gadget_finder" element={<Gadget/>}></Route>
                    <Route path="/customer_file_manager" element={<Customer data = {customerSlides}/>}></Route>
                    <Route path="/coupon_mangement_system" element={<Coupon data = {couponSlides}/>}></Route>
                    <Route path="/stock-chart/:link" element={<ImageB />}></Route>
                    <Route path="/large_image/:link" element={<ImageB />}></Route>
                </Routes>    
            </div>  
    </>
}
export default Routing