import React from 'react'
import './list.scss';

const List = () => {
  let keys = []
  for (let i = 0; i < localStorage.length; i++) {
    // if(localStorage.getItem(localStorage.key(i))!== undefined && localStorage.getItem(localStorage.key(i))!== null){
      keys.push(localStorage.key(i))
      // let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
      // console.log(item)
    // }
  }
  // for(let i = 0;i < keys.length; i++){
  //   console.log(keys[i])
  // }
  
  keys.filter((key)=> localStorage.getItem(key)!=="undefined").map((key)=>{
    console.log(localStorage.getItem(key))
  })

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
              // .filter((key)=>localStorage.getItem(key)!=="undefined").
              keys.map((key) =>{
                    return(
                      <li key={key} className='list-item'>
                        <a href=''>
                          <h1>{JSON.parse(localStorage.getItem(key))[0].fullname}</h1>
                          <h3>{JSON.parse(localStorage.getItem(key))[0].phone}</h3>
                        </a>
                      </li>)
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