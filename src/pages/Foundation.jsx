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
import CategoryA from './CategoryA'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addLike } from '../redux/makeLikeSlice'
import Footer from '../components/Footer'


function Foundation() {
    const [foundation, setFoundation] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation")
            .then(respones => respones.json())
            .then(data => setFoundation(data.slice(90)))
    }, [])
    const handleClick = (foundations) => {
        dispatch(addMakeup(foundations))
        console.log(foundations);
        navigate("/basket")
    }
    const handleup = (foundations1) => {
        dispatch(addModal(foundations1))
        console.log(foundations1);
        navigate(`/id`)
    }
    const handleup2 = (foundations2) => {
        dispatch(addLike(foundations2))
        console.log(foundations2);
        navigate("/likes")
    }
    return (
        <>
            <CategoryA />
            <h1 className='cosmetics_txt'>Foundation</h1>
            <div className='cosmetics_cards2'>
                {
                    foundation.map(foundations =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(foundations)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={foundations.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {foundations.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(foundations)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(foundations)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div>
            <div className='footer6'>
                <Footer/>
            </div>
        </>
    )
}

export default Foundation