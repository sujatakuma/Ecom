import React from 'react'
import Nav from './Nav'
import App from './App'
import Header from './Header';
import {
    BrowserRouter,
    Routes,
    Route,
  
  } from "react-router-dom";
import Product from './Product';
import Title from './Title';
import Footer from './Footer';
//import Gallery from './Gallery';
  

    

const EcomNav = () => {
  return (
    <div>
        <Nav></Nav>
        <Header></Header>
        <Title></Title>
        

        <BrowserRouter>
        <Routes>
            <Route path='/'element={<App/>}></Route>
            <Route path='/products/:id'element={<Product/>}></Route>

        </Routes>

        
        </BrowserRouter>
        <Footer></Footer>
     
    </div>
  )
}

export default EcomNav
