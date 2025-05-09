import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const isValidEmail = (email) => {
    // Simple email regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (isValidEmail(inputEmail)) {
      setIsValid(true);
      setError('');
    } else {
      setIsValid(false);
      setError('Please enter a valid email address.');
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!isValid) {
      setError('Please enter a valid email address.');
      return;
    }

    alert(`Subscribed with: ${email}`);
    setEmail('');
    setIsValid(false);
  };

  return (
    <div className="newsletter-container text-center p-5 bg-light">
      <h2 className="mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-4">Stay updated with the latest collections and offers!</p>

      <form className="d-flex flex-column align-items-center" onSubmit={handleSubscribe}>
        <input
          type="email"
          className="form-control w-50 mb-2"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {error && <small className="text-danger mb-2">{error}</small>}
        <button
          type="submit"
          className="btn btn-primary px-4"
          disabled={!isValid} // Disable button if email is not valid
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
