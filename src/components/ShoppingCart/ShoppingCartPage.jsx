import React, { useContext, useState } from 'react'
import Header from '../Header/Header'
import { Box, Grid } from '@mui/material'
import UserInformation from './UserInformation'
import TotalPrice from './TotalPrice'
import SubmitButton from './SubmitButton'
import ItemCardShoppingCart from './ItemCardShoppingCart'
import { CartContext } from '../../CartContext'

function ShoppingCartPage() {

  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCartItems);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.Price * item.quantity;
  }, 0);

  const handleUserDataChange = (fieldName, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [fieldName]: value,
    }));
  };

  return (
    <Box>
      <Header />
      <Grid container direction='row' justifyContent='center' paddingRight='50px' paddingLeft='50px' paddingTop='80px' >
        <Grid item xs={5}>
          <UserInformation onChange={handleUserDataChange} />
        </Grid>
        <Grid item xs={7}>
          <Grid container direction='column'>
            <Grid item>
              {cartItems.map((item) => (
                <ItemCardShoppingCart key={item.id}
                item={item}
                title={item.title}
                image={item.image}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={removeFromCart} />
              ))}
            </Grid>
            <Grid item>
              <Grid container direction='row' paddingTop='60px' paddingBottom='30px' paddingRight="100px" justifyContent='flex-end' spacing={4}>
                <Grid item>
                  <TotalPrice totalPrice = {totalPrice} />
                </Grid>
                <Grid item>
                  <SubmitButton userData={userData} orderedGoods={cartItems} totalPrice={totalPrice} />
                </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ShoppingCartPage