import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './pages/Users';
import NewUser from './pages/NewUser';
import UserDetails from './pages/UserDetails';
import UpdateUser from './pages/UpdateUser';
import MainNavigation from './components/shared/Navigation/MainNavigation';
import './App.css';
import LandingPage from './pages/LandingPage';


const App = () => {
  return (
    <Router>
      {/* <MainNavigation /> */}
      <main>
        <Switch>
          <Route path="/" exact>
            <LandingPage/>
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/:id/details"  exact>
            <UserDetails />
          </Route>
          <Route path="/newuser" exact>
            <NewUser />
          </Route>
          <Route path="/:id/update" exact>
            <UpdateUser />
          </Route>
          <Redirect to="/users" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
