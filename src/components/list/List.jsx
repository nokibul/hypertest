import React from 'react'
import './list.scss';

const List = () => {
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
            <li className='list-item'>
              <a href=''>
                <h1>Nokibul</h1>
                <h3>01617054351</h3>
              </a>
            </li>
            <li className='list-item'>
              <a href=''>
                <h1>Nokibul</h1>
                <h3>01617054351</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default List;