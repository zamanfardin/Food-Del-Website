import React, { useContext } from 'react'
import './Cart.css'
import { Store } from '../../context/store'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeCart,getTotalcartAmoount } = useContext(Store);
  const navigate= useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((Item, index) => {

          if (cartItems[Item._id] > 0) {
            return (

              <div >
                <div className="cart-title cart-items-item">
                  <img src={Item.image} alt="" />
                  <p>{Item.name}</p>
                  <p>${Item.price}</p>
                  <p>{cartItems[Item._id]}</p>
                  <p>${Item.price * cartItems[Item._id]}</p>
                  <p onClick={() => removeCart(Item._id)} className='cross'>x</p>
                </div>
                <hr />

              </div>




            )
          }

        }
        )}
      </div>
      <div className="cart-bottom">
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
              <b>${getTotalcartAmoount()==0?0:getTotalcartAmoount()+2}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
          
        </div>
        <div className="promo">
            <div>
              <p>If you have Promo code, Enter here.</p>
            </div>
            <div className="holder">
              <input type="text" placeholder='Promo Code' />
              <button>Submit Here</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart