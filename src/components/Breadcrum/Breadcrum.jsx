import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const Breadcrum = ({ product }) => {
  return (
    <div className="my-3 px-3">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/product' }}>
          Shop
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {product.category}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {product.name}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrum;

// {
   
//     "allproduct": [
//   {
//     "id": 1,
//     "name": "Floral Embroidered Anarkali Dress",
//     "image": "src/components/Assets/kid3.avif",
//     "category": "kids",
//     "new_price": 45.0,
//     "old_price": 65.0
//   },
//   {
//     "id": 2,
//     "name": "Pastel Green Churidar Suit",
//     "image": "src/components/Assets/man1.avif",
//     "category": "men",
//     "new_price": 55.0,
//     "old_price": 75.0
//   },
//   {
//     "id": 3,
//     "name": "Silk Blend Straight Cut Kurta",
//     "image": "src/components/Assets/chudi2.avif",
//     "category": "women",
//     "new_price": 68.0,
//     "old_price": 85.0
//   },
//   {
//     "id": 4,
//     "name": "Printed A-Line Frock with Ruffle Sleeves",
//     "image": "src/components/Assets/kid2.avif",
//     "category": "kids",
//     "new_price": 50.0,
//     "old_price": 70.0
//   },
//   {
//     "id": 5,
//     "name": "Classic Mandarin Collar Kurta Set",
//     "image": "src/components/Assets/man2.avif",
//     "category": "men",
//     "new_price": 60.0,
//     "old_price": 90.0
//   },
//   {
//     "id": 6,
//     "name": "Georgette Layered Kurti with Lace Work",
//     "image": "src/components/Assets/modern.avif",
//     "category": "women",
//     "new_price": 75.0,
//     "old_price": 95.0
//   },
//   {
//     "id": 7,
//     "name": "Contemporary Floral Print Fusion Wear",
//     "image": "src/components/Assets/overcoat.avif",
//     "category": "women",
//     "new_price": 72.0,
//     "old_price": 92.0
//   },
//   {
//     "id": 8,
//     "name": "Textured Nehru Jacket with Kurta Pajama",
//     "image": "src/components/Assets/man3.avif",
//     "category": "men",
//     "new_price": 65.0,
//     "old_price": 88.0
//   },
 
  
//     {
//       "id": 9,
//       "name": "Ethnic Wear Gown with Floral Embellishment",
//       "image": "src/components/Assets/kids1.jpg",
//       "category": "kids",
//       "new_price": 65.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 10,
//       "name": "Ethnic Wear Gown with Floral Embellishment",
//       "image": "src/components/Assets/kid4.avif",
//       "category": "kids",
//       "new_price": 70.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 11,
//       "name": "Ethnic Wear Gown with Floral Embellishment",
//       "image": "src/components/Assets/man4.avif",
//       "category": "men",
//       "new_price": 72.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 12,
//       "name": "Ethnic Wear Gown with Floral Embellishment",
//       "image": "src/components/Assets/full anarkali.avif",
//       "category": "women",
//       "new_price": 68.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 13,
//       "name": "Floral Charm Kids Gown",
//       "image": "src/components/Assets/kid5.avif",
//       "category": "kids",
//       "new_price": 60.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 14,
//       "name": "Sunshine Elegance Anarkali",
//       "image": "src/components/Assets/yellow.avif",
//       "category": "women",
//       "new_price": 63.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 15,
//       "name": "Classic Festive Kurta Set",
//       "image": "src/components/Assets/man5.avif",
//       "category": "men",
//       "new_price": 66.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 16,
//       "name": "Royal Blue Kids Kurta Ensemble",
//       "image": "src/components/Assets/kid6.avif",
//       "category": "kids",
//       "new_price": 62.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 17,
//       "name": "Elegant Maroon Men's Kurta Set",
//       "image": "src/components/Assets/man6.avif",
//       "category": "men",
//       "new_price": 70.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 18,
//       "name": "Contemporary Chic Western Dress",
//       "image": "src/components/Assets/western2.avif",
//       "category": "women",
//       "new_price": 75.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 19,
//       "name": "Midnight Glam Western Dress",
//       "image": "src/components/Assets/western.avif",
//       "category": "women",
//       "new_price": 80.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 20,
//       "name": "Urban Edge Men's Suit Set",
//       "image": "src/components/Assets/man7.avif",
//       "category": "men",
//       "new_price": 85.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 21,
//       "name": "Trendy Tux Set for Kids",
//       "image": "src/components/Assets/kid7.avif",
//       "category": "kids",
//       "new_price": 55.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 22,
//       "name": "Little Star Formal Suit",
//       "image": "src/components/Assets/kid4.avif",
//       "category": "kids",
//       "new_price": 58.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 23,
//       "name": "Mini Gentleman Tuxedo",
//       "image": "src/components/Assets/kid9.avif",
//       "category": "kids",
//       "new_price": 60.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 24,
//       "name": "Elegant Junior Suit Set",
//       "image": "src/components/Assets/kids1.jpg",
//       "category": "kids",
//       "new_price": 64.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 25,
//       "name": "Junior Royale Tux Set",
//       "image": "src/components/Assets/kid11.avif",
//       "category": "kids",
//       "new_price": 67.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 26,
//       "name": "Dapper Young Gentleman Suit",
//       "image": "src/components/Assets/kid2.avif",
//       "category": "kids",
//       "new_price": 69.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 27,
//       "name": "City Sleek Men's Suit",
//       "image": "src/components/Assets/man8.avif",
//       "category": "men",
//       "new_price": 75.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 28,
//       "name": "Modern Executive Suit Set",
//       "image": "src/components/Assets/man2.avif",
//       "category": "men",
//       "new_price": 80.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 29,
//       "name": "Classic Heritage Men's Suit",
//       "image": "src/components/Assets/man10.avif",
//       "category": "men",
//       "new_price": 83.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 30,
//       "name": "Sophisticated Business Suit",
//       "image": "src/components/Assets/man11.avif",
//       "category": "men",
//       "new_price": 87.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 31,
//       "name": "Timeless Elegance Suit Set",
//       "image": "src/components/Assets/man12.avif",
//       "category": "men",
//       "new_price": 90.0,
//       "old_price": 78.0
//     },
//     {
//       "id": 32,
//       "name": "Georgette Layered Kurti with Lace Work",
//       "image": "src/components/Assets/summer2.avif",
//       "category": "women",
//       "new_price": 85.0,
//       "old_price": 95.0
//     },
//     {
//       "id": 33,
//       "name": "Georgette Layered Kurti with Lace Work",
//       "image": "src/components/Assets/summer fit.avif",
//       "category": "women",
//       "new_price": 88.0,
//       "old_price": 95.0
//     },
//     {
//       "id": 34,
//       "name": "Georgette Layered Kurti with Lace Work",
//       "image": "src/components/Assets/partywear.avif",
//       "category": "women",
//       "new_price": 87.0,
//       "old_price": 95.0
//     },
//     {
//       "id": 35,
//       "name": "Georgette Layered Kurti with Lace Work",
//       "image": "src/components/Assets/overcoat.avif",
//       "category": "women",
//       "new_price": 90.0,
//       "old_price": 95.0
//     },
//     {
//       "id": 36,
//       "name": "Georgette Layered Kurti with Lace Work",
//       "image": "src/components/Assets/lehanga.avif",
//       "category": "women",
//       "new_price": 92.0,
//       "old_price": 95.0
//     }
//   ]
  
  
  


//   }