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


function Lip_stick() {
    const [lip_stick, setLip_stick] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick")
            .then(respones => respones.json())
            .then(data => setLip_stick(data.slice(95)))
    }, [])
    const handleClick = (lip_sticks) => {
        dispatch(addMakeup(lip_sticks))
        console.log(lip_sticks);
        navigate("/basket")
    }
    const handleup = (lip_sticks1) => {
        dispatch(addModal(lip_sticks1))
        console.log(lip_sticks1);
        navigate(`/id`)
    }
    const handleup2 = (lip_sticks2) => {
        dispatch(addLike(lip_sticks2))
        console.log(lip_sticks2);
        navigate("/likes")
    }
    return (
        <>
            <CategoryA />
            <h1 className='cosmetics_txt'>Lip sticks</h1>
            <div className='cosmetics_cards2'>
                {
                    lip_stick.map(lip_sticks =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(lip_sticks)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={lip_sticks.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {lip_sticks.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(lip_sticks)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(lip_sticks)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div>
            <div className='footer8'>
                <Footer/>
            </div>
        </>
    )
}

export default Lip_stick