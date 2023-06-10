import React from 'react';
import Products from '../products/Product';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import Register from '../../Register/Register';
import { Route, Routes } from 'react-router-dom';   

const Rout = ({productItems,cartItems,handleAddProduct, handleRemoveProduct,handleCartClearance}) => {
  return (
    <div>
      <Routes>
        <Route exact path='/' 
        element={< Products productItems={productItems} handleAddProduct={handleAddProduct}/>}> </Route>
        < Route exact path='/signup' element={ <Signup />}> </Route>
        < Route exact path='/register' element={ <Register />}> </Route>
        < Route exact path='/cart'
         element={ <Cart cartItems={cartItems} 
         handleAddProduct={handleAddProduct} 
         handleRemoveProduct={handleRemoveProduct}
         handleCartClearance={handleCartClearance}/>}></Route>
      </Routes>
    </div>
  );
};

export default Rout;
