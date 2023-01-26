"use client"
import React from 'react'
import { useState } from 'react'


const Loginform = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email !== '' && password !== '') {
        console.log('Login successful')
    }
   else {
    setError('Please fill in all fields')
  
  }
    }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
        {error && <p>{error}</p>}
        
      <button type="submit">Login</button>
    </form>
  )
}
export default Loginform;
