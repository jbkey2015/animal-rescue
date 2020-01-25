import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import firebaseConnection from '../helpers/data/connection';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import SingleShelter from '../components/pages/SingleShelter/SingleShelter';
import PetForm from '../components/pages/PetForm/PetForm';
import SinglePet from '../components/pages/SinglePet/SinglePet';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();


class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <MyNavbar authed={authed}/>
          <Switch>
            <PrivateRoute path="/" exact component={Home} authed={authed}/>
            <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
            <PrivateRoute path="/shelter/:shelterId" exact component={SingleShelter} authed={authed}/>
            <PrivateRoute path="/shelter/:shelterId/pet/new" exact component={PetForm} authed={authed}/>
            <PrivateRoute path="/shelter/:shelterId/pet/:petId/edit" exact component={PetForm} authed={authed}/>
            <PrivateRoute path="/shelter/:shelterId/pet/:petId" exact component={SinglePet} authed={authed}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
