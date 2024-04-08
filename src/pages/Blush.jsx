import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import "./Blush.css"
import { addMakeup } from '../redux/makeupSlice'
import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { addModal } from '../redux/modalSlice';
import Footer from '../components/Footer'
import Category from './Category'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addLike } from '../redux/makeLikeSlice'

function Blush() {
  const [blush, setBlush] = useState([])
  const dispatch = useDispatch("")
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush")
      .then(respones => respones.json())
      .then(data => setBlush(data.slice(27)))
  }, [])

  const handleClick = (blushed) => {
    dispatch(addMakeup(blushed))
    console.log(blushed);
    navigate("/basket")
  }
  const handleup = (blushed1) => {
    dispatch(addModal(blushed1))
    console.log(blushed1);
    navigate("/id")
  }
  const handleup2 = (blushed2) => {
    dispatch(addLike(blushed2))
    console.log(blushed2);
    navigate("/likes")
  }
  return (
    <>
      <Category />
      <h1 className='cosmetics_txt'>Blush</h1>
      <div className='cosmetics_cards2'>
        {
          blush.map(blushed =>
            <Card className='cosmetic_card2' sx={{ maxWidth: 345 }} >
              <div onClick={() => handleup(blushed)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={blushed.image_link}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {blushed.name}
                  </Typography>
                </CardContent>
              </div>
              <IconButton onClick={()=> handleup2(blushed)} aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <button onClick={() => handleClick(blushed)} className='cosmetic_btn'>ADD TO BAG</button>
            </Card>
          )
        }
      </div>
      <div className='footer1'>
        <Footer />
      </div>
    </>
  )
}

export default Blush