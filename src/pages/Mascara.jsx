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


function Mascara() {
    const [mascara, setMascara] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara")
            .then(respones => respones.json())
            .then(data => setMascara(data.slice(42)))
    }, [])
    const handleClick = (mascared) => {
        dispatch(addMakeup(mascared))
        console.log(mascared);
        navigate("/basket")
    }
    const handleup = (mascared1) => {
        dispatch(addModal(mascared1))
        console.log(mascared1);
        navigate(`/id`)
    }
    const handleup2 = (mascared2) => {
        dispatch(addLike(mascared2))
        console.log(mascared2);
        navigate("/likes")
    }
    return (
        <>
            <CategoryA />
            <h1 className='cosmetics_txt'>Mascara</h1>
            <div className='cosmetics_cards2'>
                {
                    mascara.map(mascared =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(mascared)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={mascared.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {mascared.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(mascared)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(mascared)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div>
            <div className='footer9'>
                <Footer/>
            </div>
        </>
    )
}

export default Mascara