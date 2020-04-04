/*
 *
 * Component: `App`.
 *
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages/Home";
import StoreProvider from "./Store";

const App: React.FC = (props): JSX.Element => (
  <Router>
    <StoreProvider>
      <Route exact={true} path="/" component={Home} />
    </StoreProvider>
  </Router>
);

export default App;
