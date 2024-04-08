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


function Lip_liner() {
    const [lip_liner, setLip_liner] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner")
            .then(respones => respones.json())
            .then(data => setLip_liner(data.slice(2)))
    }, [])
    const handleClick = (lip_liners) => {
        dispatch(addMakeup(lip_liners))
        console.log(lip_liners);
        navigate("/basket")
    }
    const handleup = (lip_liners1) => {
        dispatch(addModal(lip_liners1))
        console.log(lip_liners1);
        navigate(`/id`)
    }
    const handleup2 = (lip_liners2) => {
        dispatch(addLike(lip_liners2))
        console.log(lip_liners2);
        navigate("/likes")
    }
    return (
        <>
            <CategoryA />
            <h1 className='cosmetics_txt'>Lip liner</h1>
            <div className='cosmetics_cards2'>
                {
                    lip_liner.map(lip_liners =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(lip_liners)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={lip_liners.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {lip_liners.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(lip_liners)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(bronzers)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div>
            <div className='footer7'>
                <Footer/>
            </div>
        </>
    )
}

export default Lip_liner