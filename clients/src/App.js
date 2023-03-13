import React from 'react'
// import './index.css';
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import  ShoppingCategorie from "./pages/ShoppingCategorie";
import SingleProduct from "./pages/SingleProduct";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Navbar from './layout/Navbar';
import {Routes,Route} from "react-router-dom";
import { useSelector } from 'react-redux';

const App = () => {
  const user=useSelector((store)=>store.auth.currentUser);
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/categories/:category' element={< ShoppingCategorie/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<ShoppingCart/>}/>
      <Route path='/orders'element={<Orders/>}/>
      <Route path='/login' element={ user? <Home/>:<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>

  )
}

export default App