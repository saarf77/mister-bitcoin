import { NavLink, withRouter } from "react-router-dom";
import { useState, useEffect } from 'react';

function _AppHeader(props) {
  useEffect(() => {
    const toggleMenu = () => {
      document.querySelector('.nav-wrapper nav').classList.toggle('open');
    };
    document.querySelector('.menu-button').addEventListener('click', toggleMenu);
    return () => {
      document.querySelector('.menu-button').removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header className="app-header">
      <h1>Mister-BITCoin</h1>
      <div className="nav-wrapper">
        <button className="menu-button">Menu</button>
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

// function _AppHeader(props) {
//   return (
//     <header className="app-header">
//       <h1>Mister-BITCoin</h1>
//       <nav>
//         <NavLink exact to="/">
//           Home
//         </NavLink>
//         <NavLink to="/contact">Contacts</NavLink>
//         <NavLink to="/statistics">Statistics</NavLink>
//         <NavLink to="/signup">Signup</NavLink>
//       </nav>
//     </header>
//   );
// }

// export const AppHeader = withRouter(_AppHeader);
