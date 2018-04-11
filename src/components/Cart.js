import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import cartDisabledLarge from '../img/cart_disabled_large.png'
import closeIconLarge from '../img/close_icon_large.png'


const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div id="emptyCart">
      <div>
        <div id="emptyCart_image">
          <img src={cartDisabledLarge} alt="cart disbled"/>
        </div>
        <p>Please add some products <br/>to your cart.</p>
      </div>
    </div>
  )

  return (
    <div className="cartModal">
      <img src={closeIconLarge}/>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button className="addButton" 
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
