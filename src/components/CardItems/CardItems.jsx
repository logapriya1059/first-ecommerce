

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../Context/ShopContext';

const CartItems = () => {
  // ✅ grab everything from context instead of local state
  const {
    allproduct,
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(DataContext);

  // calculate total
  const totalPrice = cartItems.reduce((sum, item) => {
    const p = allproduct.find(p => p.id === item.id);
    return p ? sum + p.new_price * item.quantity : sum;
  }, 0);

  return (
    <div className="container mt-5">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map(item => {
              const product = allproduct.find(p => p.id === item.id);
              if (!product) return null; // still loading

              return (
                <li
                  key={`${item.id}-${item.size}`}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: 70, height: 100, objectFit: 'cover' }}
                    />
                  </Link>

                  <div>
                    <div className="fw-bold">{product.name}</div>
                    <div className="text-muted">Size: {item.size}</div>
                    <div>(x{item.quantity})</div>
                  </div>

                  <span>${(product.new_price * item.quantity).toFixed(2)}</span>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => decreaseQty(item.id, item.size)}
                    >−</button>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => increaseQty(item.id, item.size)}
                    >+</button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >Remove</button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-3">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>

          <Link to="/checkout" className="btn btn-primary mt-3 mb-3">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default CartItems;



