import { Grid, Typography } from '@mui/material'
import React from 'react'

function TotalPrice({totalPrice}) {
  return (
    <Grid container>
        <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: '500',
            fontSize: '24px',
        }}>Total price: {totalPrice}</Typography>
    </Grid>
  )
}

export default TotalPrice