import { AuthRoute } from "@gpsu/controller";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ModalProvider } from "../context/Modal";
import { ChangePasswordConnector } from "../modules/changePassword/ChangePasswordConnector";
import { Dashboard } from "../modules/dashboard";
import { ForgotPasswordConnector } from "../modules/forgotPassword/ForgotPasswordConnector";
import { Journeys } from "../modules/journeys";
import { JourneysExplorer } from "../modules/journeys/Read";
import { LoginConnector } from "../modules/login/LoginConnector";
import { Logout } from "../modules/logout";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { Statistics } from "../modules/statistics";
import { Users } from "../modules/users";

export const Routes = () => (
  <BrowserRouter>
    <ModalProvider>
      <Switch>
        <Route exact={true} path="/register" component={RegisterConnector} />
        <Route exact={true} path="/login" component={LoginConnector} />
        <Route
          exact={true}
          path="/forgot-password"
          component={ForgotPasswordConnector}
        />
        <Route
          exact={true}
          path="/change-password/:key"
          component={ChangePasswordConnector}
        />
        <AuthRoute exact={true} path="/" component={Dashboard} />
        <AuthRoute
          exact={true}
          path="/journeys/:journeyId"
          component={JourneysExplorer}
        />
        <AuthRoute path="/journeys" component={Journeys} />
        <Route path="/users" component={Users} />
        <AuthRoute path="/statistics" component={Statistics} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </ModalProvider>
  </BrowserRouter>
);
