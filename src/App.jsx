import React, { useState } from 'react'
import Navbar from './Componets/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './Componets/Footer/Footer'
import Loginpop from './Componets/LoginPop/Loginpop'
import Placeorder from './Pages/Placeorder/Placeorder'
import Payment from './Pages/Payment/Payment'

function App() {

  const[showLogin,setshowLogin]=useState(false); 

  return (
    <>
    {showLogin?<Loginpop setshowLogin={setshowLogin} />: <></>}
      <div className='app'>
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder/>}/>
          <Route path='/pay' element={<Payment/>}/>
          
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
