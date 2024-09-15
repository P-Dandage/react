import React, { useContext } from 'react'
import './Payment.css'
import { useEffect } from 'react';
import { json } from 'react-router-dom';
import { StoreContext } from '../../StoreContext/StoreContext'
function Payment(param) {

    const {getTotalCartAmount}=useContext(StoreContext);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [])

  
    const handlePayment = async () => { 
       
        const option = {
            key: "rzp_test_2PZv5q9nhlkfvT",
            amount:getTotalCartAmount()*100,
            currency: "INR",
            description: "Test Payment",
            email: "Pd@gmail.com",
            handler: function (response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                email: "Prath@gmail.com",
                contact: "7875363959",
            },
            notes: {
                address: "Your address",
            },
            theme: {
                color: '#3399cc',
            }
        }
        const rez = new window.Razorpay(option);
        rez.open();
    }



    return (
        <div >
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    )
}

export default Payment
