import React, { useEffect, useState } from 'react'
import "./Blush.css"
import { addMakeup } from '../redux/makeupSlice'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { addModal } from '../redux/modalSlice'
import Footer from '../components/Footer'
import Category from './Category'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addLike } from '../redux/makeLikeSlice'


function Eyebrow() {
    const [eyebrow, setEyebrow] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow")
            .then(respones => respones.json())
            .then(data => setEyebrow(data.slice(1, 25)))
    }, [])

    const handleClick = (eyebrows) => {
        dispatch(addMakeup(eyebrows))
        console.log(eyebrows);
        navigate("/basket")
    }
    const handleup = (eyebrows1) => {
        dispatch(addModal(eyebrows1))
        console.log(eyebrows1);
        navigate(`/id`)
    }
    const handleup2 = (eyebrows2) => {
        dispatch(addLike(eyebrows2))
        console.log(eyebrows2);
        navigate("/likes")
    }
    return (
        <>
            <Category />
            <h1 className='cosmetics_txt'>Eyebrow</h1>
            <div className='cosmetics_cards2'>
                {
                    eyebrow.map(eyebrows =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(eyebrows)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={eyebrows.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {eyebrows.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(eyebrows)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(eyebrows)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div >
            <div className='footer3'>
                <Footer />
            </div>
        </>
    )
}

export default Eyebrow