import React from 'react';
import './ThemeTogglerButton.css'
import Sun from '../icons/Sun';

const ThemeTogglerButton = () => {
    return (
            <button className='theme-toggler'>
                <Sun className='theme-icon'/> Light
            </button>
    );
};

export default ThemeTogglerButton;