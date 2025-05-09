// import React, { createContext, useState, useEffect } from 'react';

// // Create AuthContext
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if the user is logged in from localStorage (or an API)
//     const storedUser = localStorage.getItem('userEmail');
//     if (storedUser) {
//       setIsLoggedIn(true); // If user info exists, set logged in state
//     }
//   }, []);

//   const login = (email, password) => {
//     // Set login state and store in localStorage
//     localStorage.setItem('userEmail', email);
//     localStorage.setItem('userPassword', password);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('userEmail');
//     localStorage.removeItem('userPassword');
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Add your authentication logic here
    if (email && password) {
      setIsLoggedIn(true);
      setUser({ email }); // Example of user object
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

