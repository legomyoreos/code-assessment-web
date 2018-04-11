import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title}) => (
	<div className="itemInfoPriceContainer">
		<div className="itemInfo"> 
			<div className="itemTitle">
				<h3>{title}</h3>
			</div>
			<div className="itemInventory">
				<p>{inventory ? `${inventory}` : null} Remaining</p>
			</div> 
		</div>
		<div className="itemPrice">
			<p>&#36;{price}</p>
		</div>
	</div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string
}

export default Product
