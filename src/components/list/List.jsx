import React from 'react'
import { Link } from "react-router-dom";
import './list.scss';

const List = () => {
  let keys = []
  for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i))
  }
  for(let i = 0;i < keys.length; i++){
    console.log(keys[i])
  }

  return (
    <>
      <div className="container">
        <h1 className='page-title'>Contacts</h1>
        <div className="list-container">
          <ul className='list'>
            <li className='list-item'>
              <a href=''>
                <h1>Nokibul</h1>
                <h3>01617054351</h3>
              </a>
            </li>
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