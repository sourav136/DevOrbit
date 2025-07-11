import React from 'react';
import './MainHead.css'
import Search from '../icons/Search';
import User from '../icons/User';
import Settings from '../icons/Settings';
import NotificationIcon from '../icons/NotificationIcon'

const MainHead = () => {
    return (
        <header className='main-head'>
            <h1 className='main-header'>DashBoard</h1>  
            <div className="main-right-part d-flex align-items-center">
                <div className="search-container">
                    <Search className='search-icon'/>
                    <input className='search-input' type="text" placeholder='Type here...' />
                </div>
                <nav className='main-head-nav mt-0'>
                    <ul className='main-head-nav-ul'>
                        <li className='main-head-nav-li'><a href="#"><User className='user-icon'/></a></li>
                        <li className='main-head-nav-li'><a href="#"></a><Settings className='settings-icon'/></li>
                        <li className='main-head-nav-li'><a href="#"><NotificationIcon className='notification-icon'/></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MainHead;