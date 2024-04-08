import React from 'react'
import { useSelector } from "react-redux"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Basket() {
    const makeups = useSelector((state) => state.makeup.makeups)
    console.log(makeups);
    const som = 12688
    const rubl = 92
    return (
        <div className='cosmetics_cards2'>
            {
                makeups.map(makeupItem =>
                    <Card className='cosmetic_card2' sx={{ maxWidth: 345 }}  >
                        <CardMedia
                            component="img"
                            height="200"
                            image={makeupItem.image_link}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {makeupItem.name}
                            </Typography>
                            <div>
                                <Typography variant="body2" color="text.secondary">
                                    Dollar:{makeupItem.price}$
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Som:{makeupItem.price * som}som
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rubl:{makeupItem.price * rubl}rubl
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {makeupItem.brand}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {makeupItem.product_type}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {makeupItem.category}
                                </Typography>
                            </div>
                        </CardContent>
                        <button className='cosmetic_btn'>BUY</button>
                    </Card>
                )
            }
        </div >
    )
}

export default Basket
