import React, { useState } from 'react';
import './Log.css';
import { assets } from '../../assets/assets';

const Log = ({ setLog }) => {
  const [currentState, setState] = useState('LogIn');

  return (
    <div className="Log">
      <form className="log-container">
        <div className="log-title">
          <h2>{currentState}</h2>
          <img onClick={() => setLog(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="input">
          {currentState === 'LogIn' ? <></> : <input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button>{currentState === 'Sign Up' ? 'Create Account' : 'LogIn'}</button>
        <div className="pop-condition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === 'LogIn' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setState('Sign Up')}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setState('LogIn')}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Log;
