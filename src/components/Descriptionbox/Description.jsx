
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Description = () => {
  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs" id="productTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="description-tab"
            data-bs-toggle="tab"
            data-bs-target="#description"
            type="button"
            role="tab"
            aria-controls="description"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#reviews"
            type="button"
            role="tab"
            aria-controls="reviews"
            aria-selected="false"
          >
            Reviews
          </button>
        </li>
      </ul>

      <div className="tab-content border p-3" id="productTabContent">
        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <p>
            This product is crafted with precision and high-quality materials. Perfect for daily
            use, it offers durability and style combined.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          <div className="mb-3 border-bottom pb-2">
            <h6 className="mb-1">Alice</h6>
            <p className="mb-0 fst-italic">"Loved it! Quality is top-notch."</p>
          </div>
          <div className="mb-3 border-bottom pb-2">
            <h6 className="mb-1">Bob</h6>
            <p className="mb-0 fst-italic">"Really good value for the price."</p>
          </div>
          <div className="mb-3 border-bottom pb-2">
            <h6 className="mb-1">Charlie</h6>
            <p className="mb-0 fst-italic">"Satisfied with the purchase. Would buy again!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ProductInfoTabs = ({ description, reviews }) => {
//   return (
//     <div className="container mt-5">
//       <ul className="nav nav-tabs" id="productTab" role="tablist">
//         <li className="nav-item" role="presentation">
//           <button
//             className="nav-link active"
//             id="description-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#description"
//             type="button"
//             role="tab"
//             aria-controls="description"
//             aria-selected="true"
//           >
//             Description
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className="nav-link"
//             id="reviews-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#reviews"
//             type="button"
//             role="tab"
//             aria-controls="reviews"
//             aria-selected="false"
//           >
//             Reviews
//           </button>
//         </li>
//       </ul>

//       <div className="tab-content border p-3" id="productTabContent">
//         <div
//           className="tab-pane fade show active"
//           id="description"
//           role="tabpanel"
//           aria-labelledby="description-tab"
//         >
//           <p>{description}</p>
//         </div>
//         <div
//           className="tab-pane fade"
//           id="reviews"
//           role="tabpanel"
//           aria-labelledby="reviews-tab"
//         >
//           {reviews && reviews.length > 0 ? (
//             reviews.map((review, index) => (
//               <div key={index} className="mb-3 border-bottom pb-2">
//                 <h6 className="mb-1">{review.user}</h6>
//                 <p className="mb-0 fst-italic">"{review.comment}"</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-muted">No reviews yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductInfoTabs;


