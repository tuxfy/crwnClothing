import React from 'react';

import './checkout-item.styles.scss'
import { connect } from 'react-redux';

import { increaseItem, decreaseItem, clearItemFromCart } from "../../redux/cart/cart.actions";

const CartCheckoutItem = ({ item, clearItem, increaseItem, decreaseItem }) => {
  const { imageUrl, quantity, name, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt='item' />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span onClick={() => decreaseItem(item)}>&#10094;</span>
        {quantity}
        <span onClick={() => increaseItem(item)}>&#10095;</span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  increaseItem: item => dispatch(increaseItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item))
})

export default connect(
  null,
  mapDispatchToProps)
  (CartCheckoutItem);