import React, { useContext } from 'react'
import './Display.css'
import { Store } from '../../context/store'
import Food from '../Food Item/Food'

const Display = ({category}) => {

    const{food_list}=useContext(Store)
  return (
    <div className="food-display" id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="display-list">
          {food_list.map((item,index)=>{
            if (category==='All' || category===item.category)
            return <Food key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />
          })}
        </div>
    </div>
  )
}

export default Display