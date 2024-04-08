import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom"


function Category() {
    const [select, setSelect] = useState("")
    return (
        <>
            <br />
            <nav className='navbar'>
                <ul className='ul'>
                    <li className='items'><NavLink to={"/"} className='item'>Blush</NavLink></li>
                    <li className='items'><NavLink to={"/bronzer"} className='item'>Bronzer</NavLink></li>
                    <li className='items'><NavLink to={"/eyebrow"} className='item'>Eyebrow</NavLink></li>
                    <li className='items'><NavLink to={"/eyeliner"} className='item'>Eyeliner</NavLink></li>
                    <li className='items'><NavLink to={"/eyeshadow"} className='item'>Eyeshadow</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Category;
