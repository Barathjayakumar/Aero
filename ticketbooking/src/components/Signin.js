import React from 'react'

export default function Signin() {
  return (
  
      <div  >
        <form className='frominn'>
           <fieldset>
            <legend>SignIn</legend>
            <label>Email</label>
            <input type='email' />
            <label>password</label>
            <input type='password' />
            <button className='signinbtn'>Submit</button>
           </fieldset>
        </form>
      </div>

  )
}

