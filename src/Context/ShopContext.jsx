// // import { createContext } from "react";
// // import useFetch from "../components/CustomHook/Usefetch3";

// // const DataContext=createContext({ })
    

// // export const DataProvider=({children})=>{
// //     const {allproduct,error,isLoading}=useFetch("http://localhost:3000/allproduct");
// //     // const { products } = useFetch("http://localhost:4000/products");
// //     // const { allproduct: data, error, isLoading } = useFetch("http://localhost:3000/allproduct");

    
// //     return (
// //     <DataContext.Provider 
// //     value={{
        
// //         allproduct, error, isLoading
// //     }}>   
    
// //     {children}

// //     </DataContext.Provider>
// // )

// // }

// // export default DataContext
// import { createContext, useState } from "react";
// import useFetch from "../components/CustomHook/Usefetch3";  // Custom hook for fetching data

// const DataContext = createContext({});

// export const DataProvider = ({ children }) => {
//   // Fetching products from the API
//   const { allproduct, error, isLoading } = useFetch("http://localhost:3000/allproduct");

//   // Cart state to store added products
//   const [cartItems, setCartItems] = useState([]);

// // const addToCart = (productId) => {
// //     setCartItems((prevCart) => {
// //       const existingItem = prevCart.find(item => item.id === productId);
  
// //       if (existingItem) {
// //         // If item is already in cart, increase quantity
// //         return prevCart.map(item =>
// //           item.id === productId
// //             ? { ...item, quantity: item.quantity + 1 }
// //             : item
// //         );
// //       } else {
// //         // If not in cart, add new item with quantity 1
// //         return [...prevCart, { id: productId, quantity: 1 }];
// //       }
// //     });
// //   };
// const addToCart = (product, selectedSize) => {
//   const cartItem = {
//     id: product.id,
//     title: product.title,
//     image: product.image,
//     price: product.price,
//     size: selectedSize,
//     quantity: 1
//   };

//   // Get existing cart from localStorage
//   const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Check if item with same id and size already exists
//   const itemIndex = existingCart.findIndex(
//     item => item.id === product.id && item.size === selectedSize
//   );

//   if (itemIndex !== -1) {
//     // If item exists, increase quantity
//     existingCart[itemIndex].quantity += 1;
//   } else {
//     // Else, add new item
//     existingCart.push(cartItem);
//   }

//   // Save back to localStorage
//   localStorage.setItem('cart', JSON.stringify(existingCart));

//   alert('Item added to cart!');
// };

//   // Function to remove product from the cart
//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter((item) => item.id !== productId));
//   };
   
//   const increaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };
//   return (
//     <DataContext.Provider
//       value={{
//         allproduct,
//         error,
//         isLoading,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         increaseQty,
//         decreaseQty
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataContext;

// a
import { createContext, useState } from "react";
import useFetch from "../components/CustomHook/Usefetch3";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { allproduct, error, isLoading } = useFetch("http://localhost:3000/allproduct");

  // ✅ Load cart from localStorage at the start
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Helper to update both state + localStorage
  const updateCartStorage = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Add to cart and update UI
  const addToCart = (product, selectedSize) => {
    const newItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      size: selectedSize,
      quantity: 1,
    };

    const existingIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    let updatedCart = [...cartItems];

    if (existingIndex !== -1) {
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart.push(newItem);
    }

    updateCartStorage(updatedCart);
    alert("Item added to cart!");
  };

  const removeFromCart = (productId) => {
    const updated = cartItems.filter((item) => item.id !== productId);
    updateCartStorage(updated);
  };

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartStorage(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCartStorage(updated);
  };

  return (
    <DataContext.Provider
      value={{
        allproduct,
        error,
        isLoading,
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
