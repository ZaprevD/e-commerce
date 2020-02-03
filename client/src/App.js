import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/HeaderComponents/Header";
import Login from "./Components/LoginComponents/Login";
import Register from "./Components/RegisterComponents/Register";
import Products from "./Components/ProductsComponents/Products";
import Profile from "./Components/ProfileComponents/Profile";
class App extends Component {

  render() {
    return (
      <div className="App" >
        <Router>
          <div className="container">
            <Header  />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
