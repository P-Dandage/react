import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../StoreContext/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({category}) {
   const{food_list}=useContext(StoreContext)
  return (
    <div className='Food-display' id='Food-display'>
        <h2>Top dishes near yous</h2>
      <div className="Food-display-list">
        {food_list.map((item,index)=>{
            if(category==="All" || category===item.category)
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
