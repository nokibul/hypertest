import React from 'react'
import './create.scss'



const Create = () => {
  return (
    <>
        <form action="">
            <fieldset>
                <h2 class="title">Create</h2>
                <div className="inputs">
                    <input type="text" name="email" placeholder="Name" />
                    <input type="tel" name="pass" placeholder="Phone" />
                </div>
                <button>Save</button>
            </fieldset>
        </form>
    </>
  )
}

export default Create