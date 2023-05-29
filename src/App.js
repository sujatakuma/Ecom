//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
//import Nav from './Nav';
import Products from './Products';


function App() {
  const[products, setProducts]=useState([])
  useEffect(()=>{
    const fetchProduct=async ()=>{
      const res=await fetch('https://fakestoreapi.com/products')
      const data=await res.json()
      console.log(data);
      setProducts(data)
    }
    fetchProduct()
  },[])
  return (
    <>
    
    
    
    {products.length > 0 ?
    <Products products={products}></Products> 
  :
  <div>Lodning...</div>}
    <Products></Products>
    </>
  );
}

export default App;
