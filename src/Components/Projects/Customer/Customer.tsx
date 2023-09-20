import { NavLink } from "react-router-dom";
import slide from "../../../model/slide";
import "./Customer.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import slides from "../../../model/slides";

function Customer({ data } : slides    ): JSX.Element{
    const [slide,setslide] = useState(0);
    const nextSlide = () =>{
        setslide(slide === data.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () =>{
        setslide(slide ===0? data.length - 1 : slide - 1);
    }
      
    return(<div className="container">
            <div className="header">
                <h1>Customer file manager</h1>
                <h2>Create folders with your customer data</h2>
            </div>
            <div className="links">
            </div>
            <div className="carousel">
                        {/* Title of projects */}
                        {data.map((item : slide ,idx: number) =>{
                            return <div className={slide === idx ? "slide" : "slide-hidden"} key={idx}>
                            <NavLink to={/large_image/ + item.link}>
                            <div className="title" key={idx + "-ctitle"}>{item.title}</div>
                            <img src={item.src} alt={item.alt} key={idx + "-cimage"}/></NavLink>
                            </div>
                        })}
                    <BsArrowLeftCircleFill className="arrow arrow-left" onClick={nextSlide}/>
                    <BsArrowRightCircleFill className="arrow arrow-right" onClick={prevSlide}/>
                    <span className='indicators'>
                        {data.map((_:slide,idx: number)=> {
                            return (<button className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                            key={idx}
                            onClick={()=>setslide(idx)} ></button>
                    );
                    })}
                    </span>
            </div>
        </div>);
}
export default Customer;