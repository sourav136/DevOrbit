import React from 'react';
import './NavBar.css'
import Logo from '../../assets/images/Logo.webp'
import HomeIcon from '../icons/HomeIcon'
import NewProjectIcon from '../icons/NewProjectIcon';
import ProjectsIcon from './../icons/ProjectsIcon';
import DeveloperIcon from './../icons/DeveloperIcon';
import Help from '../help/Help';

const NavBar = () => {
    return (
        <aside className='col-3'>
            <header className='nav-head'>
                <img className='nav-logo' src={Logo} alt="Logo" />
                <svg width="234" height="1" viewBox="0 0 234 1" fill="none" className='nav-head-border'>
                    <path d="M0.5 0.500061H233.75" stroke="url(#paint0_linear_47_276)" />
                    <defs>
                        <linearGradient id="paint0_linear_47_276" x1="0.5" y1="0.500061" x2="231.5" y2="0.500061" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E0E1E2" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#E0E1E2" />
                        <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625" />
                        </linearGradient>
                    </defs>
                </svg>
            </header>
            <nav>
                <ul className='nav-links-container w-100'>
                    <li className='nav-links nav-active'>
                        <div className='nav-icon-container'><HomeIcon className='nav-icon'/></div> Dashboard
                    </li>
                    <li className='nav-links'>
                        <div className='nav-icon-container'><ProjectsIcon className='nav-icon'/></div> Projects
                    </li>
                    <li className='nav-links'>
                        <div className='nav-icon-container'><DeveloperIcon className='nav-icon'/></div> Developers
                    </li>
                    <li className='nav-links'>
                        <div className='nav-icon-container'><NewProjectIcon className='nav-icon'/></div> New Project
                    </li>
                </ul>
            </nav>
            <Help/>
        </aside>
    );
};

export default NavBar;