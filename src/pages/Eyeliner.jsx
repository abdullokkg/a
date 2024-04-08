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


function Eyeliner() {
    const [eyeliner, setEyeliner] = useState([])
    const dispatch = useDispatch("")
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner")
            .then(respones => respones.json())
            .then(data => setEyeliner(data.slice(57)))
    }, [])

    const handleClick = (eyeliners) => {
        dispatch(addMakeup(eyeliners))
        console.log(eyeliners);
        navigate("/basket")
    }
    const handleup = (eyeliners1) => {
        dispatch(addModal(eyeliners1))
        console.log(eyeliners1);
        navigate(`/id`)
    }
    const handleup2 = (eyeliners2) => {
        dispatch(addLike(eyeliners2))
        console.log(eyeliners2);
        navigate("/likes")
    }
    return (
        <>
            <Category />
            <h1 className='cosmetics_txt'>Eyeliner</h1>
            <div className='cosmetics_cards2'>
                {
                    eyeliner.map(eyeliners =>
                        <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                            <div onClick={() => handleup(eyeliners)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={eyeliners.image_link}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {eyeliners.name}
                                    </Typography>
                                </CardContent>
                            </div>
                            <IconButton onClick={() => handleup2(eyeliners)} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <button onClick={() => handleClick(eyeliners)} className='cosmetic_btn'>ADD TO BAG</button>
                        </Card>
                    )
                }
            </div>
            <div className='footer4'>
                <Footer />
            </div>
        </>
    )
}

export default Eyeliner