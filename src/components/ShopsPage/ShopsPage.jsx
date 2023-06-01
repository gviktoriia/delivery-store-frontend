import React from 'react'
import Header from '../Header/Header'
import { Box } from '@mui/material'
import ShopsBox from './ShopsBox'
import ShopItemsBox from './ShopItemsBox'

function ShopsPage() {
  return (
    <Box>
        <Header />
        <ShopsBox />
        <ShopItemsBox />
    </Box>
  )
}

export default ShopsPage