import { Box, Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ItemCard from './ItemCard';
import axios from 'axios';
import { CartContext } from '../../CartContext';

function ShopItemsBox({selectedShop}) {
  const { addToCart } = useContext(CartContext);
  const [goods, setGoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://delivery-store.herokuapp.com/goods', {
        params: { shop: selectedShop },
      })
      .then(response => {
        const goodsData = response.data;
        setGoods(goodsData);
        console.log(goodsData)
      })
      .catch(error => {
        setError(error);
        console.error('Error retrieving goods:', error);
      });
  }, [selectedShop]);

  if (error) {
    return <div>Error retrieving goods: {error.message}</div>;
  }

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <Box>
      <Grid container spacing={4} sx={{ textAlign: 'center', width: '100%', margin: '0', direction: 'row', marginBottom: '40px', alignItems: 'center', justifyContent: 'center' }}>
        {goods.map(item => (
          <Grid item lg={3.5} key={item.id}>
            <ItemCard
              title={item.Title}
              image={item.Image}
              price={item.Price}
              onAddToCart={() => handleAddToCart(item)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ShopItemsBox