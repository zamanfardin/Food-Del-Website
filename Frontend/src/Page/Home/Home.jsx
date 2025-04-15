import React, { useState } from 'react'
import './Home.css'
import Header from '../../Comp/Header/Header'
import Explore from '../../Comp/Explore/Explore'
import Display from '../../Comp/Display/Display'
import Appd from '../../Comp/AppD/Appd'

const Home = () => {
    const[category,setCategory]=useState('All'); 
  return (
    <div>
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <Display category={category}/> 
        <Appd/>
    </div>
  )
}

export default Home