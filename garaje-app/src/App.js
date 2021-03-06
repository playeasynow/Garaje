import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { withAuthentication } from './components/Session';
import Enter from "./pages/Enter";
import Home from "./pages/Home";
import ClientSurvey from "./pages/ClientSurvey";
import CoachSurvey from "./pages/CoachSurvey";
import ClientAccountPage from "./pages/ClientAccountPage";
import CoachAccountPage from "./pages/CoachAccountPage";
import NoMatch from "./pages/NoMatch";
import Conference from "./pages/Conference";
// import Nav from "./components/Nav";
import SignUpPage from "./components/SignUp";
import SignInPage from "./components/SignIn";
import PasswordForgetPage from "./components/PasswordForget";
import AdminPage from "./components/Admin";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path={ROUTES.LANDING} component={Enter} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.CLIENTACCOUNT} component={ClientAccountPage} />
            <Route exact path={ROUTES.COACHACCOUNT} component={CoachAccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
            <Route exact path={ROUTES.CLIENTSURVEY} component={ClientSurvey} />
            <Route exact path={ROUTES.COACHSURVEY} component={CoachSurvey} />
            <Route exact path={ROUTES.CONFERENCE} component={Conference} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default withAuthentication(App);
