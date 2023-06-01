import { Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function ItemCardShoppingCart({item, onQuantityChange, onRemoveItem}) {

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        onQuantityChange(item.id, newQuantity);
    };
    
    const handleRemoveItem = () => {
        onRemoveItem(item.id);
    };

  return (
    <Card sx={{
        width: '800px',
        marginBottom: '20px'
    }}>
        <Grid container direction="row">
            <Grid item xs={12} sm={6}>
            <CardMedia
                component="img"
                height="180px"
                image={item.Image}
                alt={item.Title}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <CardContent>
                <Typography
                sx={{
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 500,
                    fontFamily: 'Montserrat',
                    justifyContent: 'center',
                    display: 'flex',
                }}
                >
                    {item.Title}
                </Typography>
                <Typography sx={{
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 500,
                    fontFamily: 'Montserrat',
                    justifyContent: 'center',
                    display: 'flex',
                }}>
                    Price: {item.Price}
                </Typography>
            </CardContent>
            <CardActions >
                <Grid container justifyContent="center">
                    <Grid item>
                    <TextField
                        type="number"
                        defaultValue={1}
                        value={item.quantity}
                        onChange={handleQuantityChange}
                        sx={{ width: '100px', textAlign: 'center' }}
                    ></TextField>
                    </Grid>
                </Grid>
            </CardActions>
            </Grid>
      </Grid>
    </Card>
  )
}

export default ItemCardShoppingCart