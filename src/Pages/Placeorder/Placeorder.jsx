import React, { useContext } from 'react'
import { Form } from 'react-router-dom'
import { StoreContext } from '../../StoreContext/StoreContext'
import './Placeorder.css'
import { useNavigate } from 'react-router-dom';

function Placeorder() {
  const{getTotalCartAmount}=useContext(StoreContext);
  const Navigate=useNavigate();

    
    return (
    <form className='place-order'>
      <div className="placeorder-left">
           <p className="title">Delivery Information</p>
           <div className="multi-feilds">
            <input type="text" placeholder='First Name' />
             <input type="text" placeholder='Second Name' />
           </div>
           <input type="text" placeholder='Email Address' />
           <input type="text" placeholder='Street' />

           <div className="multi-feilds">
            <input type="text" placeholder='City' />
             <input type="text" placeholder='State' />
           </div>
           <div className="multi-feilds">
            <input type="text" placeholder='Zip Code' />
             <input type="text" placeholder='Country' />
           </div>
           <input type='text' placeholder='Mobile No'></input>
      </div>
      <div className="placeorder-rigth">
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
          <button onClick={()=>Navigate('/pay')}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
