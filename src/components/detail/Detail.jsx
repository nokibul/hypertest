import React from 'react'
import './detail.scss'
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  // gets the user id from the url 
  let { userId } = useParams();
  // gets the data from storage 
  let data = JSON.parse(localStorage.getItem(userId))
  return (
    <>
      <div className="container">
        <h1 className='page-title'>Details</h1>
        <Link to="/contacts">
          <button className='backButton'>BACK</button>
        </Link>
        <h1>{data.fullname}</h1>
        <h3>{data.phone}</h3>
      </div>
    </>
  )
}

export default Detail