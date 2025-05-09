
// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import DataContext from '../Context/ShopContext';
// import Breadcrum from '../components/Breadcrum/Breadcrum';

// const Product = () => {
//   const { productId } = useParams();
//   const { allproduct, error, isLoading } = useContext(DataContext);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const product = allproduct.find((item) => item.id === Number(productId));

//   if (!product) return <div>Product not found</div>;

//   const sizes = ['S', 'M', 'L', 'XL'];
//   const rating = 4.2; // You can also pull this from product.rating if available

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
//     <div className="container py-5">
//       <Breadcrum product={product} />

//       <div className="row mt-4">
//         <div className="col-md-6">
//           <img
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

//           {/* ⭐ Star Rating */}
//           <div className="mb-2">
//             <span className="text-warning fs-5">{renderStars(rating)}</span>
//             <span className="text-muted ms-2">({rating} / 5)</span>
//           </div>

//           {/* 📖 Description */}
//           <div className="my-3">
//             <h6>Description:</h6>
//             <p className="text-secondary">{product.description || 'No description available.'}</p>
//           </div>

//           {/* 💰 Price */}
//           <h4 className="text-dark">
//             ${product.new_price}
//             {product.old_price && (
//               <span className="text-muted text-decoration-line-through ms-3 fs-6">
//                 ${product.old_price}
//               </span>
//             )}
//           </h4>

//           {/* 📏 Sizes */}
//           <div className="my-4">
//             <h6>Select Size:</h6>
//             <div className="d-flex flex-wrap gap-2">
//               {sizes.map((size, i) => (
//                 <button key={i} className="btn btn-outline-dark px-3">
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button className="btn btn-dark mt-3 w-50">Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
// import React, { useContext } from 'react';
// import { Outlet, useParams } from 'react-router-dom';
// import DataContext from '../Context/ShopContext';
// import Breadcrum from '../components/Breadcrum/Breadcrum';

// const Product = () => {
//   const { productId } = useParams();
//   const { allproduct, error, isLoading } = useContext(DataContext);

//   // Log the productId and allproduct data to check what you are receiving
//   console.log("Product ID:", productId); // Check if productId is correct
//   console.log("All Products:", allproduct); // Log the entire products array to check the data

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const product = allproduct.find((item) => item.id === Number(productId));
//   console.log("Found Product:", product); // Check if the product is being found

//   if (!product) return <div>Product not found</div>;

//   const sizes = ['S', 'M', 'L', 'XL'];
//   const rating = 4.2; // You can also pull this from product.rating if available

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
//     <div className="container py-5">
//       <Breadcrum product={product} />

//       <div className="row mt-4">
//         <div className="col-md-6">
//           <img
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

//           {/* ⭐ Star Rating */}
//           <div className="mb-2">
//             <span className="text-warning fs-5">{renderStars(rating)}</span>
//             <span className="text-muted ms-2">({rating} / 5)</span>
//           </div>

//           {/* 📖 Description */}
//           <div className="my-3">
//             <h6>Description:</h6>
//             <p className="text-secondary">{product.description || 'No description available.'}</p>
//           </div>

//           {/* 💰 Price */}
//           <h4 className="text-dark">
//             ${product.new_price}
//             {product.old_price && (
//               <span className="text-muted text-decoration-line-through ms-3 fs-6">
//                 ${product.old_price}
//               </span>
//             )}
//           </h4>

//           {/* 📏 Sizes */}
//           <div className="my-4">
//             <h6>Select Size:</h6>
//             <div className="d-flex flex-wrap gap-2">
//               {sizes.map((size, i) => (
//                 <button key={i} className="btn btn-outline-dark px-3">
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button className="btn btn-dark mt-3 w-50">Add to Cart</button>
//         </div>
//       </div>
//       <Outlet/>
//     </div>
//   );
// };

// export default Product;


import React, { useContext} from 'react';

import { useParams } from 'react-router-dom';
import DataContext from '../Context/ShopContext';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/Productdisplay/ProductDisplay';
import Description from '../components/Descriptionbox/Description';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { allproduct, error, isLoading } = useContext(DataContext);

  console.log("Product ID from URL:", productId);  // Log the productId
  console.log("All Products:", allproduct);  // Log the products array

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Debug the matching logic to ensure correct ID matching
  const product = allproduct.find((item) => String(item.id) === String(productId));
  console.log("Found Product:", product);  // Log the found product

  if (!product) return <div>Product not found</div>;

  

  return (
    <div className="container py-5">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description/>
      {/* <RelatedProducts product={product}/> */}
      <RelatedProducts
  products={allproduct.filter(
    (item) => item.category === product.category && item.id !== product.id
  )}
/>

      
    </div>
  );
};

export default Product;
