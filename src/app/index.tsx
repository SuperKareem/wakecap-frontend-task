/*
 *
 * Component: `App`.
 *
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "pages/Home";
import { Provider } from "./store";
import Todos from "containers/Todos";
import History from "containers/History";

const App: React.FC = (): JSX.Element => (
  <Provider>
    <Router>
      <HomePage>
        <Route exact={true} path="/" component={Todos} />
        <Route exact={true} path="/History" component={History} />
      </HomePage>
    </Router>
  </Provider>
);

export default App;
