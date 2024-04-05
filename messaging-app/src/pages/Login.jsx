import React from 'react'

function Login() {
  return (
    <form >
        <input type="email" placeholder="Enter your email address" required />
        <input type="password" placeholder="Enter your password" required />
        <button type="submit" >Login</button>
    </form>
  )
}

export default Login