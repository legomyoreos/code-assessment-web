import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import chronograph from '../img/chronograph.jpg'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="singleProductContainer">
    <div className="imgContainer">
        <img src={chronograph} alt='chronograph' />
    </div>
    <div className="singleItem">
        <Product
            title={product.title}
            price={product.price}
            inventory={product.inventory} 
            image={product.img} />
        <button className="addButton"
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'}>
            {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
