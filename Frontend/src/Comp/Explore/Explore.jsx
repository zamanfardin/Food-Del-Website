import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'

const Explore = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='Text'>Food exploration provides countless opportunities to expand our palates,
        learn about other cultures, and challenge our taste buds</p>

         <div className="list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="item-list">
                        <img className={category==item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p> {item.menu_name}</p>
                    </div>
                    
                )
            })}
         </div>
         <hr/>
    </div>
  )
}

export default Explore