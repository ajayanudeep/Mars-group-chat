import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const Login = () => {
  let { loginUser } = useContext(AuthContext);
  let [username,setUsername] = useState(null);
  let [password,setPassword] = useState(null);
  const history = useNavigate();
  const handleSubmit = () => {
    loginUser()
  }
  return (
    <div className='login-form'>
        <form onSubmit={ loginUser } className='form'>
          <div className='formheader'>
            Log In
          </div>
          <div className='field'>
            <label>Username</label>
            <input type="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter a valid username'/>
          </div>
          <div className='field'>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
          </div>
          <button type='submit' >Log in</button>
          <p>Don't have an  account? <Link to='/signup' className='link'>Sign up</Link></p>
        </form>
    </div>
  )
}

export default Login