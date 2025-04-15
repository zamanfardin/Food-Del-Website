import React, { useContext } from 'react'
import './order.css'
import { Store } from '../../context/store';

const Order = () => {
  const{getTotalcartAmoount}=useContext(Store);
  return (
    <form className='place-order'>
      <div className='place-left'>
        <p className="title">Delivery Information</p>
        <div className="multi">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='E-mail Address' />
        <input type="text" placeholder='street' />
        <div className="multi">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-right">

      <div className="cart-total">
        <h2>Cart Totals</h2>
  
          
      <div>
      <div className="cart-details">
        <p>Sub-Total</p>
        <p>${getTotalcartAmoount()}</p>
              
      </div>
      <hr />
      <div className="cart-details">
        <p>Delivery Fee</p>
        <p>${getTotalcartAmoount()==0?0:2}</p>
      </div>
      <hr />
      <div className="cart-details">
        <b>Total</b>
        <b>${getTotalcartAmoount()==0?0:getTotalcartAmoount() + 2}</b>
      </div>
      </div>
        <button>Proceed To PAYMENT</button>
      </div>
        
      </div>
    </form>
  );
};

export default Order;


