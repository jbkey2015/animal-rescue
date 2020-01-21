import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import './App.scss';

import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import SingleShelter from '../components/pages/SingleShelter/SingleShelter';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};


class App extends React.Component {
  state = {
    authed: true,
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Home} authed={authed}/>
            <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
            <PrivateRoute path="/shelter/:shelterId" exact component={SingleShelter} authed={authed}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
