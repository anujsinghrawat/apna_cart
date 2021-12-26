import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from'./components/ProductList.js';
import Footer from "./components/Footer.js";

function App() {
  const products=[
    {
      price: 70000,
      name: "Iphone 13 pro max",
      quantity: 0,
    },
    {
      price: 10000,
      name: "Redmi note 10s Max",
      quantity: 0,
    }
  ]

  let [productList,setProductList]=useState(products);
  let [totalAmount,setTotalAmount]=useState(0);

   const incrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity++;
    newTotalAmount +=newProductList[index].price;  
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }
   const decrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount=totalAmount;
    if(newProductList[index].quantity > 0 )
    {newProductList[index].quantity-- ;
      newTotalAmount -=newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
    </main>
    <Footer totalAmount={totalAmount}/>
    </>
  );
}

export default App;
