import { NavLink } from 'react-router-dom';
import './Carousel.css'
import slide from '../../model/slide.js'
import {useState } from "react"; 
import {BsArrowLeftCircleFill ,BsArrowRightCircleFill} from 'react-icons/bs'
import slides from '../../model/slides.tsx';
export const Carousel =({ data } : slides) =>{
    const [slide,setslide] = useState(0);
    const nextSlide = () =>{
        setslide(slide === data.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () =>{
        setslide(slide ===0? data.length - 1 : slide - 1);
    }
      
  return (
        <div className="carousel">
                    {/* Title of projects */}
                    {data.map((item : slide ,idx: number) =>{
                        return <div className={slide === idx ? "slide" : "slide-hidden"} key={idx}>
                        <NavLink to={item.link}>
                        <div className="title" key={idx + "-title"}>{item.title}</div>
                        <img src={item.src} alt={item.alt} key={idx + "-image"}/></NavLink>
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
  );
  
}

export default Carousel;