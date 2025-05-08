import { useContext } from "react"
import React, { useState } from 'react'
import UserContext from "../context/UserContext"


function Login() {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')


    const { setuser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setuser({username,password})
    }

  return (
    <div>
          <h2>Login</h2>
          <input value={username}
              onChange={(e) => {
              setusername(e.target.value)
          }}    type="text" placeholder="username" />
          <input type="text"
              value={password}
              onChange={(e) => {
              setPassword(e.target.value)
          }}placeholder="password" />
          <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
