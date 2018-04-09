import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

import cartDefault from '../img/cart_default.png'

const App = () => (
  <div id="appContainer">
  	<header>
  		<h2 >Acme Store</h2>
  		<div id="cart_status">
  			<img src={cartDefault} alt='cart empty'/>
  			<p>Your cart is empty</p>
  		</div>
  	</header>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
