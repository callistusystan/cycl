import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import ProfilePage from "./pages/ProfilePage";
import ScenicPage from "./pages/ScenicPage";
import MobileHackathon from "./components/react-mobile-hackathon";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

class App extends Component {
  render() {
    return (
      <MobileHackathon appName="Cycl" displayUrl="cycl.com">
        <Switch>
          <Route path="/new" component={NewPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/scenic" component={ScenicPage} />
          <Route path="/search" component={SearchPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </MobileHackathon>
    );
  }
}

export default App;
