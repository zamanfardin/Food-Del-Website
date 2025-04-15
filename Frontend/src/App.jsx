import React, { useState } from 'react'
import Navbar from './Comp/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home/home'
import Cart from './Page/Cart/cart'
import Order from './Page/Order/order'
import Footer from './Comp/Footer/Footer'
import Appd from './Comp/AppD/Appd'
import Log from './Comp/Log/Log'

const App = () => {


  const [showLog,setLog]=useState(false)
  return (

    
    
    <>
    {showLog?<Log setLog={setLog}/>:<></>}

     

<div className='app'>
      <Navbar setLog={setLog} />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/order' element={<Order/>} />
      </Routes>
  
    </div>

    <Footer/>
    
    
    </>
  )
}

export default App