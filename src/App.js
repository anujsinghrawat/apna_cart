import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from'./components/ProductList.js';

function App() {
  const product=[
    {
      price: 999999,
      name: "Iphone 13 pro max",
      quantity: 1,
    },
    {
      price: 10000,
      name: "Redmi note 10s Max",
      quantity: 1,
    }
  ]
  return (
    <>
    <Navbar/>
    <ProductList product={product}/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
