import {React, useState, useRef, useEffect} from 'react'
import './create.scss';
import { v4 as uuid } from 'uuid';


const countryCodes = [
  { label: 'United States', value: '+1' },
  { label: 'Bangladesh', value: '+880' },
  { label: 'United Kingdom', value: '+44' },
  { label: 'Australia', value: '+61' },
];



const Create = () => {
  const id = uuid().slice(0,4)
  const [data, setData] = useState();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].value);
  const isMounted = useRef(false);
  // +8801617054351

  useEffect(() => {
    if (isMounted.current && data!==undefined) {
      localStorage.setItem(id, JSON.stringify(data));
      console.log(id,data)
    } else {
      isMounted.current = true;
    }
  }, [data]);

  //  the handler 
  const clickHandler = (e) => {
    e.preventDefault();
    setError(false)
    if(phone.length!==14 && phone.slice(0,3)!==880){
      setError(true)
      console.log("invalid")
      return
    }
    const info = 
      {
        fullname: name,
        phone: phone
      }
    setData(info)
  };

  const selectHandler = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
    console.log(phone)
    setSelectedCode(e.target.value);
  }

  return (
    <>
        <form action="">
            <fieldset>
                <h1 className="page-title">Create</h1>
                <div className="inputs">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={(e)=> setName(e.target.value)} />
                    <label htmlFor="phone">Phone</label>
                    <div className="numberContainer">
                      <input type="tel" name="number" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)} value={phone} />
                      <select
                          id="country-code-selector"
                          value={selectedCode}
                          onChange={selectHandler}
                        >
                          {countryCodes.map(({ label, value }) => (
                            <option key={value} value={value}>
                              {label} ({value})
                            </option>
                          ))}
                      </select>
                    </div>
                    {error? <h5 className='error'>Please provide a valid "Bangladesh" phone number</h5> : null}
                </div>
                <button onClick={clickHandler} >Save</button>
            </fieldset>
        </form>
    </>
  )
}

export default Create;