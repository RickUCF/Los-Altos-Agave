import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Import CSS files*/
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";

/*Import website pages*/
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/AboutUs" component={AboutPage} />
      <Route exact path="/Products" component={ProductsPage} />
      <Route exact path="/ContactUs" component={ContactPage} />
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
