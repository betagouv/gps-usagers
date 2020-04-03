import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppConnector } from "../modules/app/AppConnector";
import { JourneyConnector } from "../modules/journeys/JourneyConnector";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact={true}
        path="/journeys/:journeyId"
        component={JourneyConnector}
      />
      <Route path="/" component={AppConnector} />
    </Switch>
  </BrowserRouter>
);
