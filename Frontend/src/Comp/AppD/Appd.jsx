import React from 'react'
import './Appd.css'
import { assets } from '../../assets/assets'

const Appd = () => {
  return (
    <div className="app-d" id='app-id'>
        <p>For Better Experience Download it <br/> Tomato App </p>

        <div className="app-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appd