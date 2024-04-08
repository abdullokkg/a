import React, { useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';

function Nav() {
    return (
        <nav className='navbar'>
            <div>
                <img className='logo' src="https://ljaestheticsmed.com/storage/2023/01/alastin-logo-1024x536.jpg" alt="" />
            </div>
            <ul className='ul'>
                <li className='items'><NavLink to={"/category"} className='item'>Cosmeticks</NavLink></li>
                <li className='items'><NavLink to={"/categorya"} className='item'>Make up</NavLink></li>
            </ul>
            <select className='select'>
                <option value="dollar">Dollar</option>
                <option value="som">Som</option>
                <option value="rubl">Rubl</option>
            </select>
            <div className='div_icon'>
                <div className='icons'>
                    <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                </div>
                <div className='icons'>
                    <FontAwesomeIcon className='icon' icon={faUser} />
                </div>
                <div className='icons'>
                    <NavLink className={"item"} to={"/basket"}><FontAwesomeIcon className='icon' icon={faBagShopping} /></NavLink>
                </div>
                <div className='icons'>
                    <NavLink className={"item"} to={"/likes"}><FavoriteIcon /></NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
