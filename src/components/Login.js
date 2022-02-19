import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {email,password};
    console.log(user)
    history('/')
  }
  return (
    <div className='login-form'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='formheader'>
            Log In
          </div>
          <div className='field'>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter a valid email'/>
          </div>
          <div className='field'>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
          </div>
          <button type='submit' >Log in</button>
          <p>Don't have an  account? <Link to='/signup' className='link'>Sign up</Link></p>
        </form>
    </div>
  )
}

export default Login