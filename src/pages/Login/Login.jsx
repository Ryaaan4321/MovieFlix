import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logoforus2.png'


const Login = () => {

  const [signState,setsignState]=useState("Sign In")

  return (
    
    <div className='login'>
     
      <img src={logo} className='loginlogo' alt=''/> 
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"? <input type='' placeholder='Your Name'/>:<></>}
          
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {
           signState==="Sign In" ?<p>New To Website ?
             <span onClick={()=>{setsignState("Sign Up")}}>
            Sign Up Now</span></p>:
           <p>Already have account <span onClick={()=>{setsignState("Sign In")}}>
            Sign In Now</span></p>
           }
        </div>
        </div> 
    </div>
  )
}
 
export default Login
