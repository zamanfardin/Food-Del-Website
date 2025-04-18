import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list,setList] =useState([]);
  const fetchList = async()=>{
    const response =await axios.get(`${url}/api/food/list`);
    
    

    if (response.data.success){
      setList(response.data.data)

    }
    else{
      toast.error("error")
    }
  }

  const removeFood =async(FoodId)=>{
    const response =await axios.post(`${url}/api/food/remove`,{id:FoodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)

    }
    else{
      toast.error("error")
    }
    

  }

  
    useEffect(()=>{
      fetchList();
  
    },[])
  

 
  return (
    <div className="list col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/`+item.image} alt='' />

              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              
              <p onClick={()=>removeFood(item._id)}  className='cursor'>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List