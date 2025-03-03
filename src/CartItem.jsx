import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + Number(item.cost.substring(1)) * item.quantity, 0);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('This is just a demo, not a real plant buying webpate. Hence, checkout is not enabled.');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return Number(item.cost.substring(1)) * item.quantity;
  };

  return (
    <div className="cart-page-container">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Price: {item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Subtotal: ${calculateTotalCost(item)}
                </div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      )}

      {/* Cart Summary and Buttons */}
      <div className="cart-summary">
        <h3>Total Amount: ${calculateTotalAmount()}</h3>
        <div className="cart-buttons">
          <button
            className="cart-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
          <button
            className="cart-button checkout-button"
            onClick={handleCheckoutShopping}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;