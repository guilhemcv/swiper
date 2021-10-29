import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "../../container/accueil";
import Swipe from "../../container/swipe";
import Map from "../../container/map";
import Favoris from "../../container/favoris";

function RouteSwitch() {
  return (
    <Router>
      <Switch>
        <Route path="/swipe" component={Swipe} />
        <Route path="/map" component={Map} />
        <Route path="/favoris" component={Favoris} />
        <Route exact path="/" component={Accueil} />
      </Switch>
    </Router>
  );
}

export default RouteSwitch;
