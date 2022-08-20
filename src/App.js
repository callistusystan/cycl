import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage';
import ProfilePage from './pages/ProfilePage';
import MobileHackathon from './components/react-mobile-hackathon';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <MobileHackathon appName="Cycl" displayUrl="cycl.com">
              <Switch>
                <Route path='/new' component={NewPage} />
                <Route path='/profile' component={ProfilePage} />
                <Route exact path='/' component={HomePage} />
              </Switch>
            </MobileHackathon>
        );
    }
}

export default App;