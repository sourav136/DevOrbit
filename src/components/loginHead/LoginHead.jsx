import React from 'react';
import Logo from '../../assets/images/Logo.webp'
import ThemeTogglerButton from './../ThemeToggler/ThemeTogglerButton';

const LoginHead = () => {
    return (
        <header className='login-header d-flex align-items-center justify-content-between bg-transparent w-100 container mt-3'>
            <img src={Logo} alt="Logo" width="198" height="23" className='login-logo' />
            <style>
                {`
                @media (max-width: 575.98px) {
                    .login-logo {
                    width: 130px;
                    height: 20px;
                    }
                }
                `}
            </style>
            <ThemeTogglerButton/>
        </header>
    );
};

export default LoginHead;