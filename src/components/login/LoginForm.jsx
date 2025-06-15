import React from 'react';
import './LoginForm.css'
import Facebook from '../../assets/images/facebook.png'
import Google from '../../assets/images/google.png'
import Apple from '../../assets/images/apple.png'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-head'>Log In</h2>
            <div className="social-icons-container d-flex align-items-center justify-content-center">
                <button className="social-icon-box"><img src={Facebook} alt="Facebook logo" /></button>
                <button className="social-icon-box"><img src={Apple} alt="Apple logo" /></button>
                <button className="social-icon-box"><img src={Google} alt="Google logo" /></button>
            </div>
            <p className='form-break'>or</p>
            <form action="" className='login-form'>
                <div className="input-container">
                    <label className='form-label' htmlFor="name">Name</label>
                    <input className='form-input' type="text" id='name' autoComplete='true' placeholder='Your full name' />
                </div>

                <div className="input-container">
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='form-input' type="mail" id='email' autoComplete='true' placeholder='Your email address' />
                </div>

                <div className="input-container">
                    <label className='form-label' htmlFor="password">Password</label>
                    <input className='form-input' type="password" id='password' autoComplete='true' placeholder='Your password' />
                </div>

                <div className="switch-container form-switch">
                    <input className='switch-input form-check-input' type="checkbox" id="remember-me" />
                    <label className='switch-label' htmlFor="remember-me">Remember me</label>
                </div>

                <button className='form-submit' type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;