import React from 'react'
import {Grid, Typography} from '@mui/material';
import { Link, useLocation } from "react-router-dom";
import { cart_route, home_route } from '../Routing/Routes';

const linkStyle = {
    verticalAlign: 'center',
    marginLeft: 'auto',
    color: 'black',
    textDecoration: 'none'
};

const activeLinkStyle = {
    fontWeight: '700',
    color: 'black',

}

function Header() {
    const location = useLocation();
  return (
    <Grid container direction='row' columnSpacing={3} paddingTop='30px' paddingLeft='100px'>
        <Grid item>
            <Link to={home_route} style={location.pathname === home_route ? activeLinkStyle : linkStyle} >
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '20px',
                    fontWeight: '500',
                }}>Shop</Typography>
            </Link>
        </Grid>
        <Grid item>
            <Link to={cart_route} style={location.pathname === cart_route ? activeLinkStyle : linkStyle} >
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '20px',
                    fontWeight: '500',
                }}>Shopping Cart</Typography>
            </Link>
        </Grid>
    </Grid>
  )
}

export default Header