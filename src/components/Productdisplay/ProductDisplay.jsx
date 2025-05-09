import React from 'react'
import { useState } from 'react';
import DataContext from '../../Context/ShopContext';
import { useContext } from 'react';

const ProductDisplay = ({product}) => {
      const {addToCart } = useContext(DataContext);
      const handleAddToCart = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      
        if (!isLoggedIn) {
          alert('Please log in to add items to your cart.');
          return;
        }
      
        if (!selectedSize) {
          alert('Please select a size before adding to cart.');
          return;
        }
      
        // Now call addToCart
        addToCart(product, selectedSize);
      };
      

    const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['S', 'M', 'L', 'XL'];
  const rating = 4.2; // You can also pull this from product.rating if available

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push('★');
    if (halfStar) stars.push('☆');
    while (stars.length < 5) stars.push('☆');

    return stars.join(' ');
  };
  return (
    <div>
        <div className="row mt-4">
        <div className="col-md-6">
          <img onClick={window.scrollTo(0,0)}
            src={product.image}
            alt={product.name}
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '1rem',
              backgroundColor: '#f8f9fa',
              padding: '1rem',
            }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-uppercase text-muted">{product.category}</p>

          {/* ⭐ Star Rating */}
          <div className="mb-2">
            <span className="text-warning fs-5">{renderStars(rating)}</span>
            <span className="text-muted ms-2">({rating} / 5)</span>
          </div>

          {/* 📖 Description */}
          <div className="my-3">
            <h6>Description:</h6>
            {/* <p className="text-secondary">{product.description || 'No description available.'}</p> */}
            <p className="text-secondary">Alight-weight, usually knitted, pullover shirt, close-fitting and very comfortable a round necline and short sleeves, worn as a undershirt or outer  garment.</p>
          </div>

          {/* 💰 Price */}
          <h4 className="text-dark">
            ${product.new_price}
            {product.old_price && (
              <span className="text-muted text-decoration-line-through ms-3 fs-6">
                ${product.old_price}
              </span>
            )}
          </h4>

          {/* 📏 Sizes */}
          <div className="my-4">
            <h6>Select Size:</h6>
            <div className="d-flex flex-wrap gap-2">
              {sizes.map((size, i) => (
                // <button key={i}  className="btn btn-outline-dark px-3">
                //   {size}
                // </button>
                <button
                  key={i}
                  value={selectedSize} 
                  onChange={(e)=>{setSelectedSize(e.target.value)}}
                  className={`btn px-3 ${selectedSize === size ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
                
              ))}
            </div>
          </div>

          <button className="btn btn-dark mt-3 w-50" onClick={()=>{handleAddToCart(product.id)}}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
// // import React, { useState, useContext } from 'react';
// // import AuthContext from '../../Context/AuthContext'; // Import AuthContext
// // import DataContext from '../../Context/ShopContext';

// // const ProductDisplay = ({ product }) => {
// //   const { addToCart } = useContext(DataContext);
// //   const { isLoggedIn } = useContext(AuthContext); // Get login state from context

// //   const [selectedSize, setSelectedSize] = useState(null);
// //   const sizes = ['S', 'M', 'L', 'XL'];
// //   const rating = 4.2; // Rating from product

// //   // const handleAddToCart = () => {
// //   //   if (!isLoggedIn) {
// //   //     alert('Please log in to add items to your cart.');
// //   //     return;
// //   //   }

// //   //   if (!selectedSize) {
// //   //     alert('Please select a size before adding to cart.');
// //   //     return;
// //   //   }

// //   //   addToCart(product, selectedSize); // Add to cart
// //   // };
  

// //   const handleAddToCart = () => {
// //     if (!isLoggedIn) {
// //       alert('Please log in to add items to your cart.');
// //       return;
// //     }
    
// //      if (!selectedSize) {
// //        alert('Please select a size before adding to cart.');
// //        return;
// //      }
// //      addToCart(product, selectedSize);
// //     // Your add-to-cart logic here
// //   };
// //   const renderStars = (rating) => {
// //     const fullStars = Math.floor(rating);
// //     const halfStar = rating % 1 >= 0.5;
// //     const stars = [];
  
// //     for (let i = 0; i < fullStars; i++) stars.push('★');
// //     if (halfStar) stars.push('☆');
// //     while (stars.length < 5) stars.push('☆');
  
// //     return stars.join(' ');
// //   };
  

// //   return (
// //     <div>
// //       <div className="row mt-4">
// //         <div className="col-md-6">
// //           <img
// //             onClick={window.scrollTo(0, 0)}
// //             src={product.image}
// //             alt={product.name}
// //             className="img-fluid"
// //             style={{
// //               maxWidth: '100%',
// //               height: 'auto',
// //               objectFit: 'contain',
// //               borderRadius: '1rem',
// //               backgroundColor: '#f8f9fa',
// //               padding: '1rem',
// //             }}
// //           />
// //         </div>

// //         <div className="col-md-6 d-flex flex-column justify-content-center">
// //           <h2 className="fw-bold">{product.name}</h2>
// //           <p className="text-uppercase text-muted">{product.category}</p>

// //           <div className="mb-2">
// //             <span className="text-warning fs-5">{renderStars(rating)}</span>
// //             <span className="text-muted ms-2">({rating} / 5)</span>
// //           </div>

// //           <h4 className="text-dark">
// //             ${product.new_price}
// //             {product.old_price && (
// //               <span className="text-muted text-decoration-line-through ms-3 fs-6">
// //                 ${product.old_price}
// //               </span>
// //             )}
// //           </h4>

// //           <div className="my-4">
// //             <h6>Select Size:</h6>
// //             <div className="d-flex flex-wrap gap-2">
// //               {sizes.map((size, i) => (
// //                 <button
// //                   key={i}
// //                   className={`btn px-3 ${selectedSize === size ? 'btn-dark' : 'btn-outline-dark'}`}
// //                   onClick={() => setSelectedSize(size)}
// //                 >
// //                   {size}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           <button className="btn btn-dark mt-3 w-50" onClick={handleAddToCart}>Add to Cart</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDisplay;
// import React, { useState, useContext } from 'react';
// import AuthContext from '../../Context/AuthContext'; // Make sure this provides isLoggedIn

// const ProductDisplay = ({ product }) => {
//   const { isLoggedIn } = useContext(AuthContext); // Login state from context
//   const [selectedSize, setSelectedSize] = useState(null);
//   const sizes = ['S', 'M', 'L', 'XL'];
//   const rating = 4.2; // Or use product.rating if available

//   const handleAddToCart = () => {
//     if (!isLoggedIn) {
//       alert('Please log in to add items to your cart.');
//       return;
//     }

//     if (!selectedSize) {
//       alert('Please select a size before adding to cart.');
//       return;
//     }

//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

//     const existingItemIndex = existingCart.findIndex(
//       (item) => item.id === product.id && item.size === selectedSize
//     );

//     if (existingItemIndex !== -1) {
//       existingCart[existingItemIndex].quantity += 1;
//     } else {
//       const newItem = {
//         id: product.id,
//         name: product.name,
//         image: product.image,
//         price: product.new_price,
//         size: selectedSize,
//         quantity: 1,
//       };
//       existingCart.push(newItem);
//     }

//     localStorage.setItem('cart', JSON.stringify(existingCart));

//     alert('Item added to cart!');
//   };

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const stars = [];

//     for (let i = 0; i < fullStars; i++) stars.push('★');
//     if (halfStar) stars.push('☆');
//     while (stars.length < 5) stars.push('☆');

//     return stars.join(' ');
//   };

//   return (
//     <div>
//       <div className="row mt-4">
//         <div className="col-md-6">
//           <img
//             onClick={() => window.scrollTo(0, 0)}
//             src={product.image}
//             alt={product.name}
//             className="img-fluid"
//             style={{
//               maxWidth: '100%',
//               height: 'auto',
//               objectFit: 'contain',
//               borderRadius: '1rem',
//               backgroundColor: '#f8f9fa',
//               padding: '1rem',
//             }}
//           />
//         </div>

//         <div className="col-md-6 d-flex flex-column justify-content-center">
//           <h2 className="fw-bold">{product.name}</h2>
//           <p className="text-uppercase text-muted">{product.category}</p>

//           <div className="mb-2">
//             <span className="text-warning fs-5">{renderStars(rating)}</span>
//             <span className="text-muted ms-2">({rating} / 5)</span>
//           </div>

//           <h4 className="text-dark">
//             ${product.new_price}
//             {product.old_price && (
//               <span className="text-muted text-decoration-line-through ms-3 fs-6">
//                 ${product.old_price}
//               </span>
//             )}
//           </h4>

//           <div className="my-4">
//             <h6>Select Size:</h6>
//             <div className="d-flex flex-wrap gap-2">
//               {sizes.map((size, i) => (
//                 <button
//                   key={i}
//                   className={`btn px-3 ${selectedSize === size ? 'btn-dark' : 'btn-outline-dark'}`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button className="btn btn-dark mt-3 w-50" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;

