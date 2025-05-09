

import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '/Assets/logo.png';
import { Link } from 'react-router-dom';
import DataContext from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const {cartItems}=useContext(DataContext)
  const [isCollapsed, setIsCollapsed] = useState(true);  // State to track collapse status

  // Toggle collapse state
  const handleToggle = () => setIsCollapsed(!isCollapsed);
  // const totalCount = cartItems.reduce((count, item) => {
  //   return count + (item.quantity > 0 ? 1 : 0);
  // }, 0);
  // const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  // const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <img src={logo} alt="logo" width="60" height="60" />

        
        <h2 className="navbar-brand fs-3">Shopper</h2>

        <button
          type="button"
          className="navbar-toggler"
          onClick={handleToggle}  // Use React state to toggle
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse Navbar */}
        <div className={`collapse navbar-collapse justify-content-between ${isCollapsed ? '' : 'show'}`} id="navbarCollapse">
          <div className="navbar-nav mx-5">
            <Link to="/" onClick={() => setMenu("Shop")} className="nav-item nav-link mx-3">
              Shop {menu === "Shop" && <hr className="under-sore" />}
            </Link>
            <Link to="/mens" onClick={() => setMenu("Men")} className="nav-item nav-link mx-3">
              Men {menu === "Men" && <hr className="under-sore" />}
            </Link>

            <Link to="/womens" onClick={() => setMenu("Women")} className="nav-item nav-link mx-3">
              Women {menu === "Women" && <hr className="under-sore" />}
            </Link>

            <Link to="/kids" onClick={() => setMenu("Kids")} className="nav-item nav-link mx-3">
              Kids {menu === "Kids" && <hr className="under-sore" />}
            </Link>
          </div>

          <div className="navbar-nav ms-auto d-flex align-items-center gap-3 me-5">
            
            <Link to="/login" className="btn nav-item nav-link btn-light btn-outline-dark">
            {/* <button className=" btn btn-light"> */}
            Login
            {/* </button> */}
              
            </Link>

            <Link to="/cart" className="nav-item nav-link position-relative cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 
                  4H14.5a.5.5 0 0 1 .485.621l-1.5 
                  6A.5.5 0 0 1 13 11H4a.5.5 0 0 
                  1-.485-.379L1.61 3H.5a.5.5 0 0 
                  1-.5-.5M3.14 5l.5 2H5V5zM6 
                  5v2h2V5zm3 0v2h2V5zm3 
                  0v2h1.36l.5-2zm1.11 
                  3H12v2h.61zM11 8H9v2h2zM8 
                  8H6v2h2zM5 8H3.89l.5 2H5zm0 
                  5a1 1 0 1 0 0 2 1 1 0 0 0 
                  0-2m-2 1a2 2 0 1 1 4 0 2 2 
                  0 0 1-4 0m9-1a1 1 0 1 0 0 
                  2 1 1 0 0 0 0-2m-2 1a2 2 
                  0 1 1 4 0 2 2 0 0 1-4 0"/>
              </svg>
              {/* <div className="nav-cart-count">{cartItems.length}</div> */}
              <div className="nav-cart-count">
  {cartItems.filter(item => item.id && item.quantity > 0).length}
</div>
              {/* <div className="nav-cart-count">{cartCount}</div> */}
               {/* {totalCount > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {totalCount}
          </span>
        )} */}

            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
