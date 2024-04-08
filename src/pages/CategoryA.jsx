import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom"


function CategoryA() {
    const [select, setSelect] = useState("")
    return (
        <>
        <br />
            <nav className='navbar'>
                <ul className='ul'>
                    <li className='items'><NavLink to={"/foundation"} className='item'>Foundation</NavLink></li>
                    <li className='items'><NavLink to={"/lip_liner"} className='item'>Lip liner</NavLink></li>
                    <li className='items'><NavLink to={"/lip_stick"} className='item'>Lipstick</NavLink></li>
                    <li className='items'><NavLink to={"/mascara"} className='item'>Mascara</NavLink></li>
                    <li className='items'><NavLink to={"/nail_polish"} className='item'>Nail polish</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default CategoryA;
