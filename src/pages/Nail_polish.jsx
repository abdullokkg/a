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


function Nail_polish() {
    const [nail_polish, setNail_polish] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish")
            .then(respones => respones.json())
            .then(data => setNail_polish(data.slice(14)))
    }, [])
    const handleClick = (nail_polished) => {
        dispatch(addMakeup(nail_polished))
        console.log(nail_polished);
        navigate("/basket")
    }
    const handleup = (nail_polished1) => {
        dispatch(addModal(nail_polished1))
        console.log(nail_polished1);
        navigate(`/id`)
    }
    const handleup2 = (nail_polished2) => {
        dispatch(addLike(nail_polished2))
        console.log(nail_polished2);
        navigate("/likes")
    }
    return (
        <>
            <CategoryA />
            <h1 className='cosmetics_txt'>Nail polish</h1>
            <div className='cosmetics_cards2'>
                {
                    nail_polish.map(nail_polished =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(nail_polished)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={nail_polished.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {nail_polished.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(nail_polished)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(nail_polished)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div>
            <div className='footer10'>
                <Footer/>
            </div>
        </>
    )
}

export default Nail_polish