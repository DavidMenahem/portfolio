import { Routes,Route } from "react-router-dom"
import Coupon from "../../Projects/Coupon/Coupon"
import Stock from "../../Projects/Stock/Stock"
import Main from "../../Main/Main"

function Routing(): JSX.Element{
    return(
                <Routes>
                    <Route path="/" element = {<Main/> }></Route>
                    <Route path="/portfolio" element = {<Main/> }></Route>
                    <Route path="/coupon" element={<Coupon/>}></Route>
                    <Route path="/stock" element={<Stock/>}></Route>
                </Routes>
    )    
}
export default Routing