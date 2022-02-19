import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
const Signup = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmpassword] = useState('');
  const history=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {name,email,password,confirmpassword};
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
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter full name' />
          </div>
          <div className='field'>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter a valid email'/>
          </div>
          <div className='field'>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
          </div>
          <div className='field'>
            <label>Confirm Password</label>
            <input type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder='Enter password again' />
          </div>
          <button type='submit' >Sign Up</button>
          <p>Already have an  account? <Link to='/login' className='link'>Log in</Link></p>
        </form>
    </div>
  )
}

export default Signup