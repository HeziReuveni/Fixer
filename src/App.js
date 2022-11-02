import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPrivateArea from "./pages/UserArea/UserPrivateArea/UserPrivateArea";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user-area" component={UserPrivateArea} />
      </Switch>
    </Router>
  );
};

export default App;
