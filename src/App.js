import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageForm from "./pages/Form";
import PageList from "./pages/List";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/form" exact component={PageForm} />
          <Route path="/list" component={PageList} />
        </Switch>
    </Router>
  );
}

export default App