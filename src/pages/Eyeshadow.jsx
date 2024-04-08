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


function Eyeshadow() {
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    const [eyeshadow, setEyeshadow] = useState([])

    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow")
            .then(respones => respones.json())
            .then(data => setEyeshadow(data.slice(40)))
    }, [])

    const handleClick = (eyeshadows) => {
        dispatch(addMakeup(eyeshadows))
        console.log(eyeshadows);
        navigate("/basket")
    }
    const handleup = (eyeshadows1) => {
        dispatch(addModal(eyeshadows1))
        console.log(eyeshadows1);
        navigate(`/id`)
    }
    const handleup2 = (eyeshadows2) => {
        dispatch(addLike(eyeshadows2))
        console.log(eyeshadows2);
        navigate("/likes")
    }
    return (
        <>
            <Category />
            <h1 className='cosmetics_txt'>Eyeshadow</h1>
            <div className='cosmetics_cards2'>
                {
                    eyeshadow.map(eyeshadows =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(eyeshadows)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={eyeshadows.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {eyeshadows.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(eyeshadows)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(eyeshadows)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div>
            <div className='footer5'>
                <Footer />
            </div>
        </>
    )
}

export default Eyeshadow