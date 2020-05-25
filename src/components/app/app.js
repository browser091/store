import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import StoreHeader from "../store-header/storeHeader";
import "./app.scss";

const App = () => {
  return (
    <main className="container">
      <StoreHeader numItems={4} total={455} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};
export default App;
