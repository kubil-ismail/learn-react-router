import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((val, key) => (
          <Route
            path={val.route}
            exact={val.isExact}
            component={val.component}
            key={key}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;