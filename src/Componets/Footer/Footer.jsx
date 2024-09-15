import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='Footer' id='Footer'>
            <div className="Footer-content">
                <div className="Footer-content-left">
                       <img src={assets.logo} alt=""  />
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quam, ipsam ullam accusantium unde aspernatur eius reprehenderit officia ab aperiam eaque esse voluptatum atque, aut pariatur ducimus amet blanditiis ipsa.</p>
                       <div className="Footer-social-icon">
                        <img src={assets.facebook_icon}/>
                        <img src={assets.twitter_icon}/>
                        <img src={assets.linkedin_icon}/>
                       </div>
                </div>
                <div className="Footer-content-center">
                      <h2>COMPANY</h2>
                      <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Police</li>
                      </ul>
                </div>
                <div className="Footer-content-rigth">
                     <h2>GET IN TOUCH </h2>
                     <ul>
                        <li>+91 7875363959</li>
                        <li>Contact@tomato.com</li>

                     </ul>
                </div>

            </div>
           <hr/>
           <p className='Footer-copyrigth'>Copyright 2024 © pd.com - All Right</p>
        </div>
    )
}

export default Footer
