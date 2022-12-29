import { NavLink, withRouter } from "react-router-dom";
import { useState, useEffect } from 'react';

function _AppHeader(props) {
  const toggleMenu = () => {
    document.querySelector('.nav-wrapper nav').classList.toggle('open');
  };

  useEffect(() => {
    document.querySelector('.menu-button').addEventListener('click', toggleMenu);
    document.querySelector('.nav-wrapper nav').addEventListener('click', toggleMenu);
    return () => {
      document.querySelector('.menu-button').removeEventListener('click', toggleMenu);
      document.querySelector('.nav-wrapper nav').removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header className="app-header">
      <h1>Mister-BITCoin</h1>
      <div className="nav-wrapper">
        <button className="menu-button">☰</button>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/contact">Contacts</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </nav>
      </div>
    </header>
  );
}

export const AppHeader = withRouter(_AppHeader);


// import { NavLink, withRouter } from "react-router-dom";
// import { useState, useEffect } from 'react';

// function _AppHeader(props) {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   useEffect(() => {
//     const toggleMenu = () => {
//       setIsNavOpen(!isNavOpen);
//     };
//     document.querySelector('.menu-button').addEventListener('click', toggleMenu);
//     document.querySelector('.nav-wrapper nav').addEventListener('click', toggleMenu);
//     document.addEventListener('click', event => {
//       if (!event.target.closest('.nav-wrapper')) {
//         setIsNavOpen(false);
//       }
//     });
//     return () => {
//       document.querySelector('.menu-button').removeEventListener('click', toggleMenu);
//       document.querySelector('.nav-wrapper nav').removeEventListener('click', toggleMenu);
//       document.removeEventListener('click', toggleMenu);
//     };
//   }, [isNavOpen]);

//   return (
//     <header className="app-header">
//       <h1>Mister-BITCoin</h1>
//       <div className="nav-wrapper">
//         <button className="menu-button">☰</button>
//         <nav className={isNavOpen ? 'open' : ''}>
//           <NavLink exact to="/">
//             Home
//           </NavLink>
//           <NavLink to="/contact">Contacts</NavLink>
//           <NavLink to="/statistics">Statistics</NavLink>
//           <NavLink to="/signup">Signup</NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export const AppHeader = withRouter(_AppHeader);