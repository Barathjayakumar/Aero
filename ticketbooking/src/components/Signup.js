import React from 'react'

export default function Signup() {
  return (
    <div>
       <form className="formup">
           <fieldset>
            <legend>SignUp Here</legend>
            <label>Name:</label>
            <input type='text' />
            <label>Email:</label>
            <input type='email' />
            <label>password:</label>
            <input type='password' />
            <button className='signupbtn'>Submit</button>
           </fieldset>
        </form>
    </div>
  )
}
