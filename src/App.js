import React, { useState,useEffect } from 'react';
import {commerce} from './lib/commerce';
import {Products,Navbar , Cart} from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { wait } from '@testing-library/user-event/dist/utils';

const App = ()=>{
    const [products,setProducts]= useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };


      const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };

      const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item);
      };

      useEffect(() => {
        fetchProducts();
        fetchCart();
      }, []);

    return (
      <Router>
        <div>
             <Navbar  totalItems={cart.total_items} />  
             <Routes>
                  <Route exact path="/" element={ <Products  products={products} onAddToCart={handleAddToCart} />} />
                  <Route exact path="/cart" element={ <Cart cart={cart} />} />
              </Routes>
        </div> 

        </Router>
    )
}

export default App;