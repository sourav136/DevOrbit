import React from 'react';
import QuestionMark from '../icons/QuestionMark';
import './Help.css'

const Help = () => {
    return (
        <div className='help w-100'>
            <div className="help-icon-container">
                <QuestionMark className='question-icon'/>
            </div>
            <h3 className='help-header'>Need help?</h3>
            <p className='help-p'>Please check our docs</p>
            <a href="#" className='help-link'>Documentation</a>
        </div>
    );
};

export default Help;