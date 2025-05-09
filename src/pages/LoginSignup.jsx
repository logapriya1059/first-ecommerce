
// import React, { useState } from 'react';
// import './Css/LoginSignup.css';

// const LoginSignup = () => {
//   const [isSignup, setIsSignup] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const toggleMode = () => {
//     setIsSignup(!isSignup);
//     setEmail('');
//     setPassword('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignup) {
//       // Save to localStorage
//       localStorage.setItem('userEmail', email);
//       localStorage.setItem('userPassword', password);
//       alert('Signup successful! You can now log in.');
//       setIsSignup(false);
//     } else {
//       const storedEmail = localStorage.getItem('userEmail');
//       const storedPassword = localStorage.getItem('userPassword');

//       if (email === storedEmail && password === storedPassword) {
//         alert('Login successful!');
//         // navigate or change auth state
//       } else {
//         alert('Invalid credentials or user not signed up.');
//       }
//     }
//   };

//   return (
//     <div className="login-signup-page">
//       <div className="form-container">
//         <h3 className="form-title">{isSignup ? 'Sign Up' : 'Login'}</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label className="input-label">Email address</label>
//             <input
//               type="email"
//               className="input-field"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="input-group">
//             <label className="input-label">Password</label>
//             <input
//               type="password"
//               className="input-field"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="submit-btn">
//             {isSignup ? 'Sign Up' : 'Login'}
//           </button>
//         </form>

//         <div className="toggle-mode">
//           <small>
//             {isSignup ? 'Already have an account?' : 'Don’t have an account?'}{' '}
//             <button className="toggle-btn" onClick={toggleMode}>
//               {isSignup ? 'Login' : 'Sign Up'}
//             </button>
//           </small>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState, useContext } from 'react';
import './Css/LoginSignup.css';
// import AuthContext from '../../Context/AuthContext'; // Import the context
import AuthContext from '../Context/AuthContext';

const LoginSignup = () => {
  const { login, isLoggedIn } = useContext(AuthContext); // Access context state and actions
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Perform signup action
      login(email, password);
      alert('Signup successful! You can now log in.');
      setIsSignup(false);
    } else {
      // Validate login
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        login(email, password); // Set login state
      } else {
        alert('Invalid credentials or user not signed up.');
      }
    }
  };

  return (
    <div className="login-signup-page">
      <div className="form-container">
        <h3 className="form-title">{isSignup ? 'Sign Up' : 'Login'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Email address</label>
            <input
              type="email"
              className="input-field"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="toggle-mode">
          <small>
            {isSignup ? 'Already have an account?' : 'Don’t have an account?'}{' '}
            <button className="toggle-btn" onClick={toggleMode}>
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

