import { Button } from '@mui/material'
import axios from 'axios';
import React from 'react'

function SubmitButton({ userData, orderedGoods, totalPrice }) {

  const handleSubmit = () => {
    const orderedGoodsWithQuantity = orderedGoods.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
  
    const data = {
      userData,
      orderedGoods: orderedGoodsWithQuantity,
      totalPrice,
    };


    axios.post('https://delivery-store.herokuapp.com/orders', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Button variant='outlined' onClick={handleSubmit} sx={{
        color: 'black',
        borderColor: 'black',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        height: '40px',
        borderRadius: '40px',
        "&:hover": {
            backgroundColor: 'black',
            color: 'white',
        }
    }}>Submit</Button>
  )
}

export default SubmitButton