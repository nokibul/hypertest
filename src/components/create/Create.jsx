import {React, useState, useRef, useEffect} from 'react'
import './create.scss'
import { v4 as uuid } from 'uuid';



const Create = () => {
  const id = uuid().slice(0,4)
  let number = useRef()
  let name = useRef();
  const [data, setData] = useState([]);
  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(data));
  }, [data]);

  const clickHandler = (e) => {
    e.preventDefault();
    const info = [
      {
        fullname: name.current.value,
        phone: number.current.value
      }
    ]
    setData(info)
    name.current.value = ""
    number.current.value = ""
    console.log(id)
  };

  return (
    <>
        <form action="">
            <fieldset>
                <h1 className="page-title">Create</h1>
                <div className="inputs">
                    <input type="text" name="name" placeholder="Name" ref={name} />
                    <h5 className='error'>Error</h5>
                    <input type="tel" name="number" placeholder="Phone" ref={number} />
                    <h5 className='error'>Error</h5>
                </div>
                <button onClick={clickHandler}>Save</button>
            </fieldset>
        </form>
    </>
  )
}

export default Create