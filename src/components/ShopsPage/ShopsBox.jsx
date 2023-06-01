import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ShopItemsBox from './ShopItemsBox';


function ShopsBox() {
    const [shops, setShops] = useState([]);
    const [selectedShop, setSelectedShop] = useState(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://delivery-store.herokuapp.com/shops')
      .then(response => {
        const shopsData = response.data;
        setShops(shopsData);
        if (shopsData.length > 0 && !selectedShop) {
          setSelectedShop(shopsData[0].shop);
        }
      })
      .catch(error => {
        setError(error);
        console.error('Error retrieving shops:', error);
      });
  }, [selectedShop]);

  if (error) {
    return <div>Error retrieving shops: {error.message}</div>;
  }

  const handleShopClick = (shop) => {
    setSelectedShop(shop);
  };

  return (
    <Box >
      <Grid item paddingBottom='40px'>
        <Typography
          sx={{
            justifyContent: 'center',
            display: 'flex',
            fontFamily: 'Montserrat',
            fontSize: '24px',
            fontWeight: '600',
          }}
        >
          Shops:
        </Typography>
      </Grid>
      <Grid container direction='row' justifyContent='center'>
        {shops.map((item, index) => (
          <Grid item justifyContent='center' display='flex' key={index}>
            <Button
              variant='text'
              sx={{
                color: 'black',
                fontFamily: 'Montserrat',
                fontSize: '20px',
                fontWeight: '500',
                marginBottom: '20px',
              }}
              onClick={() => handleShopClick(item.shop)}
            >
              {item.shop}
            </Button>
          </Grid>
        ))}
      </Grid>
      {selectedShop && <ShopItemsBox selectedShop={selectedShop} />}
    </Box>
  )
}

export default ShopsBox