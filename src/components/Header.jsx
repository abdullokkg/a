import React, { useEffect, useState } from 'react'
import "./Header.css"
import { addModal } from '../redux/modalSlice'
import {  useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"

function Header() {
    const [makeups, setMakeups] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
            .then(respones => respones.json())
            .then(data => setMakeups(data.slice(1, 2)))
    }, [])

    const handleup = (makeup) => {
        dispatch(addModal(makeup))
        console.log(makeup);
        navigate("/id")
    }
    return (
        <>
            <div className='cosmetics'>
                {
                    makeups.map(makeup =>
                        <>
                            <div className='div_makeup' onClick={() => handleup(makeup)}>
                                <div className='h1_makeups'>
                                    <h1 className='text_makeup'>{makeup.name}</h1>
                                    <p className='txt_makeup'>{makeup.description}</p>
                                    <button className='btn_makeup'>SHOP NOW</button>
                                </div>
                                <img className='img_makeup' src={makeup.image_link} alt="" />
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Header
