import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./assets/scss/global.scss";
import { Home } from "./pages/Home";
import { ContactPage } from "./pages/ContactPage";
import { StatisticPage } from "./pages/StatisticPage";
import { ContactDetails } from "./pages/ContactDetailsPage";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { ContactEdit } from "./pages/ContactEdit";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <div className="main-app">
        <AppHeader />
        <main className="container">
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route path="/contact/:id" component={ContactDetails} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/statistics" component={StatisticPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          <section className="container">
            &copy; Saar Fridman {new Date().getFullYear()}
          </section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
