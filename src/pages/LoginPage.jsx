import React from 'react';
import './LoginPage.css'
import LoginForm from '../components/login/LoginForm';
import LoginHead from '../components/loginHead/LoginHead';

const LoginPage = () => {
    return (
        <main className='login-page'>
            <section aria-labelledby='login-heading' className="login-page-contents">
                <LoginHead/>
                <h1 className='login-page-head' id='login-heading'>Welcome!</h1>
                <p className='login-page-description'>We're glad to have you here! Log in to manage your projects, track progress, and stay connected with your development team.</p>
                <LoginForm/>
            </section>
        </main>
    );
};

export default LoginPage;