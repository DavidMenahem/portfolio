import { Routes,Route } from "react-router-dom"
import Gadget from "../../Projects/Gadget/Gadget"
import Carousel from "../../Carousel/Carousel"
import {slides} from "../../../data/slides/carouselData.json"
import Customer from "../../Projects/Customer/Customer"
import ImageB from "../../Image/ImageB"
import Coupon from "../../Projects/Coupon/Coupon"

function Routing(): JSX.Element{
    return <>
            <div className="Routing">
                <Routes>
                    <Route path="/" element = {<Carousel data={slides} /> }></Route>
                    <Route path="/the_gadget_finder" element={<Gadget/>}></Route>
                    <Route path="/customer_file_manager" element={<Customer/>}></Route>
                    <Route path="/coupon_mangement_system" element={<Coupon/>}></Route>
                    <Route path="/stock-chart/:link" element={<ImageB />}></Route>
                </Routes>    
            </div>  
    </>
}
export default Routing