import React from 'react'
import AppNavbar from './component/AppNavbar'
import { Route,Routes } from 'react-router-dom'
import Cart from './component/Cart'
import Products from './component/Products'
import Slider from './component/Slider'
import ProductDetails from './component/ProductDetails'



export default function App() {
  return (
    <div>
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='product/:productId' element={<ProductDetails/>}/>


      </Routes>
    </div>
  )
}

