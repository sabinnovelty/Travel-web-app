import React from "react";
import { Switch, Route } from "react-router-dom";
// import Container from 'commons/Style/Container'

import Home from "../Home";
import GuideDetail from "../../components/Listings/Guides/Detail";
import HotelDetail from "../../components/Listings/Hotels/Detail";
import AllGuides from "../../components/Listings/Guides/All";
import Payment from "../../components/Listings/Guides/Payment";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/guide" component={GuideDetail} />
        <Route path="/hotel" component={HotelDetail} />
        <Route path="/guides" component={AllGuides} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </>
  );
};

export default App;
