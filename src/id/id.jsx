import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux"
import "./id.css"
import { addMakeup } from '../redux/makeupSlice';
import { useNavigate } from "react-router-dom"


const id = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const modal = useSelector((state) => state.modaldata.modal).slice(0, 1)
  const handleClick = (modales) => {
    dispatch(addMakeup(modales))
    console.log(modales);
    navigate("/basket")
  }
  const som = 12688
  const rubl = 92
  return (
    <div className='post-view'>
      {
        modal.map(modales =>
          <Card className='card' sx={{ maxWidth: 500 }} >
            <CardMedia className='cardmd'
              component="img"
              height="200"
              image={modales.image_link}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {modales.name}
              </Typography>
              <div>
                <Typography variant="body2" color="text.secondary">
                  Dollar:{modales.price}$
                </Typography><Typography variant="body2" color="text.secondary">
                  Som:{modales.price * som}som
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rubl:{modales.price * rubl}rubl
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {modales.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {modales.product_type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {modales.category}
                </Typography>
              </div>
              <button onClick={() => handleClick(modales)} className='btn_card'>BUY</button>
            </CardContent>
          </Card>
        )
      }
    </div>
  )
}

export default id