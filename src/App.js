import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import Routes from "/home/andy/Documents/logos-jewellery/src/components/Routes";
//import HomePage from "views/home"
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import Create from "./Pages/Create";
import AboutUs from "./Pages/AboutUs";
import BlogsDetails from "./Pages/BlogsDetails";


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/" > 
            <HomePage />
          </Route>

          <Route path="/aboutus" > 
            <AboutUs />
          </Route>

          <Route path="/create" > 
            <Create />
          </Route>

          <Route path="/blogs/:id" > 
            <BlogsDetails />
          </Route>

        </Switch>
      </div>
    </Router>
  );

}

export default App;

//npm install babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin --save-dev