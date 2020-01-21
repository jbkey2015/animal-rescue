import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    const shelterId = '12345';
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <Link className="btn btn-secondary" to={`/shelter/${shelterId}`}>Single Shelter Page</Link>
      </div>
    );
  }
}

export default Home;
