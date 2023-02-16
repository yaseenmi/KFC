import { useState } from 'react';
import logo from '../assets/vectors/kfc-logo.svg';

import '../styles/header.css'
function Header() {
    const [language, setLanguage] = useState('عربي');
    return (
        <div id={'slideTop'} className='header-container'>
            <div className='header-section1'>
                <div className='header-menu-container'>
                    <div className='menu-icon1'></div>
                    <div className='menu-icon2'></div>
                    <div className='menu-icon3'></div>
                </div>
                <img src={logo} className="kfc-logo" alt="logo" />
                <input className='search-input' name='search' type='text' />
            </div>

            <div className="dropdown language">
                <button className="btn btn language-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {language}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li onClick={()=>{setLanguage('عربي')}}><a className="dropdown-item" href="#">عربي</a></li>
                    <li onClick={()=>{setLanguage('English')}}><a className="dropdown-item" href="#">English</a></li>
                    <li onClick={()=>{setLanguage('French')}}><a className="dropdown-item" href="#">French</a></li>
                </ul>
            </div>

        </div>
    )
}
export default Header;