import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CartCheckoutItem from '../../components/checkout-item/checkout-item.component';


const Checkout = ({cartItems, total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {
          ['Product', 'Decription', 'Quantity', 'Price', 'Remove'].map(headerElement =>
            <div key={headerElement} className="header-block">
              <span>{headerElement}</span>
            </div>
          )
        }
      </div>
      {
        cartItems.map(cartItem =>
          <CartCheckoutItem key={cartItem.id} item={cartItem} />
        )
      }
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);