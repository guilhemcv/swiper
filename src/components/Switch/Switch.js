import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "../../container/accueil";
import Swipe from "../../container/swipe";
import Map from "../../container/map";
import Favoris from "../../container/favoris";

function RouteSwitch() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/Swipe">
            <Swipe />
          </Route>
          <Route exact path="/Map">
            <Map />
          </Route>
          <Route exact path="/Favoris">
            <Favoris />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouteSwitch;
