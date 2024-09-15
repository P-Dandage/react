import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../StoreContext/StoreContext';
function FoodItem({id,name,description,price,image}) {

    const{cartItem,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className="FoodItem">
      <div className="FoodItem-image-container">
        <img src={image} alt="" className="FoodItem-image" /> 
        {!cartItem[id]
            ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
            :<div className='FoodItem-Counter'>
                <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red}/>
                <p>{cartItem[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
            </div>
             }
      </div>
      <div className="FoodItem-info">
        <div className="FoodItem-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt=""  />
           
        </div>
            <p className='FoodItem-description'>{description}</p>
            <p className='FoodItem-price'>Rs {price}</p>
          
      </div>
    </div>
  )
}

export default FoodItem
