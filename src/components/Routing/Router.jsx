import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { cart_route, home_route } from './Routes'
import ShopsPage from '../ShopsPage/ShopsPage'
import ShoppingCartPage from '../ShoppingCart/ShoppingCartPage'
import { Box } from '@mui/material'

function Router() {
  return (
    <Box>
      <Routes>
              <Route path={home_route} element={<ShopsPage />}></Route>
              <Route path={cart_route} element={<ShoppingCartPage />}></Route>
      </Routes>
    </Box>
  )
}

export default Router