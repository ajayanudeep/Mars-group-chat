import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
const Signup = () => {
  const [username,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password1,setPassword] = useState('');
  const [password2,setConfirmpassword] = useState('');
  const history=useNavigate();
  let create = async (user) => {
    await fetch(`http://localhost:8000/create_user/`,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {username,email,password1,password2};
    await create({username,email,password1,password2})
    console.log(user)
    history('/login')
  }
  return (
    <div className='login-form'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='formheader'>
            Sign up
          </div>
          <div className='field'>
            <label>Name</label>
            <input type="text" value={username} onChange={(e)=>setName(e.target.value)} placeholder='Enter full name' />
          </div>
          <div className='field'>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter a valid email'/>
          </div>
          <div className='field'>
            <label>Password</label>
            <input type="password" value={password1} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
          </div>
          <div className='field'>
            <label>Confirm Password</label>
            <input type="password" value={password2} onChange={(e) => setConfirmpassword(e.target.value)} placeholder='Enter password again' />
          </div>
          <button type='submit' >Sign Up</button>
          <p>Already have an  account? <Link to='/login' className='link'>Log in</Link></p>
        </form>
    </div>
  )
}

export default Signup