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
          <Route path="/swipe">
            <Swipe />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/favoris">
            <Favoris />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouteSwitch;
