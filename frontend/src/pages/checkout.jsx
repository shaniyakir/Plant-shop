import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import checkoutPic from '../assets/checkoutpic.jpeg';



function Checkout() {
    
  return (
    <Grid align="center" style={{paddingTop:"50px", paddingBottom:"50px"}}>
        <Card sx={{ maxWidth: 345 }} align="center">
        <CardActionArea>
            <img src={checkoutPic} alt="BigCo Inc. logo" style={{ width: '100%'}}/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div"  
                sx={{
                 fontFamily: 'monospace',
                 letterSpacing: '.2rem',
                }}>
                    Thank You!
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{paddingBottom: "20px"}}>
               We are super excited to prepare your order and can not wait for you to enjoy your new plants.
            </Typography>
            </CardContent>
        </CardActionArea>

        </Card>
    </Grid>
  );
}

export default Checkout;
