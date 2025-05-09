
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// const RelatedProducts = ({ product }) => {
   

//   return (
//     <div className="container mt-5">
//       <h4 className="mb-4">Related Products</h4>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {product.map((product) => (
//           <div className="col" key={product.id}>
//             <div className="card h-100">
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">${product.price}</p>
//                 <Link to={`/product/${product.id}`} className="btn btn-outline-primary btn-sm">
//                   View Product
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ products }) => {
  if (!Array.isArray(products)) return null;

  return (
    <div className="container mt-5">
      <h4 className="mb-4">Related Products</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                onClick={window.scrollTo(0,0)}
            //    variant="top"
                src={product.image}
                className="card-img-top "
                alt={product.name}
                // style={{ height: '200px', objectFit: 'cover' }}
                style={{
                    height: "250px",           // Keeps uniform card size
                    width: '100%',
                    objectFit: 'contain',      // Shows full image, no cropping
                    padding: '10px',           // Optional: adds spacing around image
                    backgroundColor: '#f8f9fa',// Light background behind transparent images
                    borderBottom: '1px solid #eee',
                    borderRadius: '1rem 1rem 0 0' // Optional: rounded top edges
          
                  }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.new_price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-outline-primary btn-sm">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

