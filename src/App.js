import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPrivateArea from "./pages/UserArea/UserPrivateArea/UserPrivateArea";
import EmployeeTable from "./pages/UserArea/EmployeeTable/EmployeeTable";
import Papers from "./pages/UserArea/Papers/Papers";
import PayrollCalculator from "./pages/UserArea/PayrollCalculator/PayrollCalculator";
import Help from "./pages/UserArea/Help/Help";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user-area" component={UserPrivateArea} />
        <Route path="/papers" component={Papers} />
        <Route path="/calculator" component={PayrollCalculator} />
        <Route path="/employee-table" component={EmployeeTable} />
        <Route path="/help" component={Help} />
      </Switch>
    </Router>
  );
};

export default App;
