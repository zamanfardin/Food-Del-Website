import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-contentL">
                <img src={assets.logo} alt="" />
                <p>It is a text messaging service that allows the exchange of short text messages between mobile devices.</p>
                <div className="footer-social">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-contentC">
                <h2>Business Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-contentR">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+880-1531277030</li>
                    <li>zamanfardin5836@gmail.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className="copywrite">Copywrite 2025 © FZ - All Rights Reserved.</p>
    </div>
  )
}

export default Footer