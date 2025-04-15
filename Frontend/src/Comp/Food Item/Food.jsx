import React, { useContext } from 'react'
import './Food.css'
import { assets } from '../../assets/assets'

import { Store } from '../../context/store'

const Food = ({id,name,price,description,image}) => {


  const{cartItems,addToCart,removeCart}=useContext(Store);
  return (
    <div className="all-item">
        <div className="food-image">
            <img className='item-image' src={image} alt="" />
            {!cartItems[id]
              ?<img src={assets.add_icon_white} alt="" className="add" onClick={()=>addToCart(id)} />
              : <div className="food-counter">
                <img onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />

              </div>

            }
        </div>

        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-desc'>{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default Food