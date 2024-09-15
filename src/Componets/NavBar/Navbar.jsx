import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../StoreContext/StoreContext';

function Navbar({setshowLogin}) {
  const[menu,setmenu]=useState("Menu");
  const{getTotalCartAmount}=useContext(StoreContext);
   
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='' className='logo'></img></Link>
      <ul className="navbar-menu">
        <Link to='/'onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#Explore-menu" onClick={()=>setmenu("Menu")}className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#app-download"onClick={()=>setmenu("Mobile-app")}className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href="#Footer"onClick={()=>setmenu("Contact-us")}className={menu==="Contact-us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-rigth">
        <img src={assets.search_icon} alt=""  />
        <div className="navbar-search-icon">
         <Link to="/Cart"> <img  src={assets.basket_icon}  alt="" /></Link>
         
          <div className={getTotalCartAmount()===0?" ": "dot"}></div>
        </div>
        <button onClick={()=>setshowLogin(true)}> Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
