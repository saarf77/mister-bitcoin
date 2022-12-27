import { NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {
  return (
    <header className="app-header">
      <h1>Mister-BITCoin</h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/contact">Contacts</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>
    </header>
  );
}

export const AppHeader = withRouter(_AppHeader);
