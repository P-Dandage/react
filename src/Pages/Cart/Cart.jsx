import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../StoreContext/StoreContext'
import { useNavigate } from 'react-router-dom';


function cart() {
  const { cartItem, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const Navigate=useNavigate();
  return (
    <div className='Cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className='cart-item-title cart-item-item'>
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>Rs {item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{cartItem[item._id] * item.price}</p>
                  <p onClick={() => removeFromCart(item._id)} className='Close'>X</p>
                </div>
                <hr />
              </>

            )

          }

        })}
      </div>
      <div className="cart-bottom">
        <div className='cart-total'>
          <h2>Carts Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>Navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
          </div>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='Promo code'></input>
            <button>Submit </button>
          </div>
        </div>
      </div> 
    </div>

  )
}

export default cart
