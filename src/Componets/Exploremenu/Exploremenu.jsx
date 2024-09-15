import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
function Exploremenu( {category,setCategory}) {
  return (
    <div className='Explore-menu' id='Explore-menu'>
      <h1>Explore our menu</h1>
      <p className='Explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.Our mission is to Satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="Explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div   onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}className="Explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=""  />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default Exploremenu
