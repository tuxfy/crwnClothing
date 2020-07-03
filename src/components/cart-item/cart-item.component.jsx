import React from 'react';

import './cart-item.styles.scss'
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';

const CartItem = ({ item, clearItem }) => {
  const { id, imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt='item' />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x {price} $</span>
        <div className="remove-button" onClick={() => clearItem(item)}>
          &#10005;
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
})


export default connect(null, mapDispatchToProps)(CartItem);