import React, { useContext } from 'react';
import DataContext from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, allproduct } = useContext(DataContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    const product = allproduct.find(p => p.id === item.id);
    return product ? acc + product.new_price * item.quantity : acc;
  }, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    // Clear cart logic can go here
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <hr />

      <div className="mb-4">
        <h4>Order Summary</h4>
        <ul className="list-group">
          {cartItems.map((item) => {
            const product = allproduct.find(p => p.id === item.id);
            if (!product) return null;

            return (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{product.name} (x{item.quantity})</span>
                <span>${(product.new_price * item.quantity).toFixed(2)}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-3">
          <strong>Total: ${totalPrice.toFixed(2)}</strong>
        </div>
      </div>

      <div className="mb-4">
        <h4>Shipping Info</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="John Doe" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" placeholder="123 Main St" required />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input type="text" className="form-control" required />
          </div>
        </form>
      </div>

      <button className="btn btn-success mb-3" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
