import "./App.css";
import LoginProvider from "./LoginProvider";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <LoginProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </LoginProvider>
    </Router>
  );
}

export default App;
