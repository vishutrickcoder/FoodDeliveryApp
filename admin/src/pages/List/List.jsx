import React, { useEffect, useState } from 'react';
import "./List.css";
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fatchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.status === 200) {
      console.log(response.data.Data)
      setList(response.data.Data)
    } else {
      toast.error("Error")
    }
  }

  const removeFood =async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id : foodId})
    await fatchList();
    if (response.status === 200){
      toast.success(response.data.message)
    }else{
      toast.error("Error While Deleting Food ...")
    }
  }

  useEffect(() => {
    fatchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List </p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format title'>
            <img src={`${url}/images/${item.image}`} alt="" />
            <p>{item.foodname}</p>
            <p>{item.category}</p>
            <p>Rs .{item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
