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


function Bronzer() {
    const [bronzer, setBronzer] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer")
            .then(respones => respones.json())
            .then(data => setBronzer(data.slice(21)))
    }, [])

    const handleClick = (bronzers) => {
        dispatch(addMakeup(bronzers))
        console.log(bronzers);
        navigate("/basket")
    }
    const handleup = (bronzers1) => {
        dispatch(addModal(bronzers1))
        console.log(bronzers1);
        navigate(`/id`)
    }
    const handleup2 = (bronzers2) => {
        dispatch(addLike(bronzers2))
        console.log(bronzers2);
        navigate("/likes")
    }
    return (
        <>
            <Category />
            <h1 className='cosmetics_txt'>Bronzer</h1>
            <div className='cosmetics_cards2'>
                {
                    bronzer.map(bronzers =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(bronzers)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={bronzers.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {bronzers.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(bronzers)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(bronzers)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div >
            <div className='footer2'>
                <Footer />
            </div>
        </>
    )
}

export default Bronzer