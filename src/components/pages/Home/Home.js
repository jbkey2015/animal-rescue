import React from 'react';

import './Home.scss';
import shelterData from '../../../helpers/data/shelterData';
import Shelter from '../../shared/Shelter/Shelter';

class Home extends React.Component {
  state = {
    shelters: [],
  }

  componentDidMount() {
    shelterData.getShelters()
      .then((shelters) => this.setState({ shelters }))
      .catch((err) => console.error('error from get shelters', err));
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="shelters d-flex flex-wrap">
          {this.state.shelters.map((shelter) => <Shelter key={shelter.id} shelter={shelter} />)}
        </div>
      </div>
    );
  }
}

export default Home;
