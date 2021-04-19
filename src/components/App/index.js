import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import AuthPage from "../pages/AuthPage";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const setIsLoggedHandler = (boolean) => {
    setIsLogged(boolean);
  }

  return (
    <div className="container">
      <Switch>
        <Route path="/join">
          <AuthPage onSetIsLogged={setIsLoggedHandler} />
        </Route>
        <Route path="/" exact>
          <MainPage isLogged={isLogged} onSetIsLogged={setIsLoggedHandler} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
