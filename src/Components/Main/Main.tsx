import { useEffect } from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom';
function Main():JSX.Element{
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (<div className='home'>
            <header>
                <h1>David Menahem</h1>
                <h2>Projects</h2>
              <div className='picture'>
                  <img src='https://i.ibb.co/p21mQ8X/profile-picture.png' alt='Profile picture' width={100} height={100}/>
              </div>  
            </header>

            <aside>
                <div className="wrap-details details">
                        <div className="circle">City: Ra'anana, Israel</div>
                        <div className="circle">Telephone: +972-53-8285199</div>
                        <div className="circle" >Email: dvmena39@gmail.com</div>
                </div>
                <div className="wrap-details more-details">
                    <div className="circle">Status: Married</div>
                    <div className="circle">Birthyear & country: 1985, UK</div>
                    <div className="circle">License: B</div>
                </div>
                <div className="wrap-details links">
                    <div className="github">
                        <a href="https://github.com/dvmena36" target='blank'>Github</a>
                    </div>
                </div>
            </aside>
        <main>
            <div className="container">
            <NavLink to="/coupon">
                <figure className="figure">
                <figcaption className="caption">Coupon system</figcaption>
                        <img src="https://i.ibb.co/4f4wPDZ/coupon-add.png" alt="Coupon management" width="192" height="192"/>
                </figure>
                </NavLink>
            </div>
            <div className="container">
            <NavLink to="/customer">
                    <figure className="figure">
                    <figcaption className="caption">Customers files</figcaption>
                            <img src="https://i.ibb.co/CWWZ8Cw/customer-main.png" alt="Customer file system" width="192" height="192"/>
                </figure>
                </NavLink>
            </div>
            <div className="container">
                <NavLink to="/stock">
                <figure className='figure'>
                <figcaption className="caption">Stock charts</figcaption>
                    <img src="https://i.ibb.co/k5V7NRf/stock-chart.png" alt="Stock charts" width="192" height="192"/>
                </figure>
                </NavLink>
            </div>
        </main>
    </div>
  ); 
}

export default Main;