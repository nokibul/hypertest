import React from 'react'
import { Link } from "react-router-dom";
import './list.scss';

const List = () => {
  let keys = []
  for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i))
  }

  return (
    <>
      <div className="container">
        <h1 className='page-title'>Contacts</h1>
        <Link to="/">
          <button className='homeButton'>CREATE</button>
        </Link>
        <div className="list-container">
          <ul className='list'>
            {
              keys.map((key) =>{
                    return (
                      <li  className='list-item'>
                        <Link to={`/contacts/${key}`}>
                          <h1>{JSON.parse(localStorage.getItem(key)).fullname}</h1>
                          <h3>{JSON.parse(localStorage.getItem(key)).phone}</h3>
                        </Link>
                      </li>
                  )
                }
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default List;