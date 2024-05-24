import React from 'react'

export default function Signin() {
  return (
    <div>
      <div>
        <form>
            <label>Name</label>
            <input type='text' />
            <label>Email</label>
            <input type='email' />
            <label>password</label>
            <input type='password' />
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
