import React, { useState } from 'react'
import './detail.scss'
import { Link, useParams } from 'react-router-dom';
// import { set } from 'immer/dist/internal';

const Detail = () => {
  const [editStatus, setEditStatus] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  // gets the user id from the url 
  const { userId } = useParams();
  // gets the data from storage 
  const data = JSON.parse(localStorage.getItem(userId))
  const editHandler = ()=>{
    setName(data.fullname)
    setPhone(data.phone)
    setEditStatus(true)
    console.log(name);
  }

  const saveHandler = ()=>{
    localStorage.setItem(userId, JSON.stringify({fullname: name, phone: phone}))
  }

  return (
    <>
      <div className="container">
        <h1 className='page-title'>Details</h1>
        <Link to="/contacts">
          <button className='backButton'>BACK</button>
        </Link>
        <h1>{editStatus? <input value={name} className="editInput" onChange={(e)=>setName(e.target.value)} /> : data.fullname}</h1>
        <h3>{editStatus? <input value={phone} className="editInput" onChange={(e)=>setPhone(e.target.value)} /> : data.phone}</h3>
        {editStatus? <button onClick={saveHandler} className='editButton'>Save</button> :<button onClick={editHandler} className='editButton'>Edit</button>}
      </div>
    </>
  )
}

export default Detail