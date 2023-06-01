import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

function ItemCard({ title, image, price, onAddToCart }) {
  return (
    <Card >
        <Grid container direction="column">
            <Grid item xs={12} sm={6}>
            <CardMedia
                component="img"
                width="100%"
                image={image}
                alt={title}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <CardContent>
                <Grid container direction="column">
                    <Grid item>
                        <Typography
                        sx={{
                            maxWidth: "250px",
                            color: 'black',
                            fontSize: '20px',
                            fontWeight: 500,
                            fontFamily: 'Montserrat',
                            float: 'left',
                        }}
                        >
                        {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                        sx={{
                            maxWidth: "250px",
                            color: 'black',
                            fontSize: '20px',
                            fontWeight: 500,
                            fontFamily: 'Montserrat',
                            float: 'left',
                        }}
                        >
                        Price: {price}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button
                variant="outlined"
                sx={{
                    width: 'fit-content',
                    color: 'black',
                    borderColor: 'black',
                    borderRadius: '20px',
                    marginLeft: 'auto',
                }}
                onClick={onAddToCart}
                >
                Add to cart
                </Button>
            </CardActions>
            </Grid>
      </Grid>
    </Card>
  )
}

export default ItemCard