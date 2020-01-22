import React from 'react';
import { Link } from 'react-router-dom';

import shelterShape from '../../../helpers/propz/shelterShape';

import './Shelter.scss';

class Shelter extends React.Component {
  static propTypes = {
    shelter: shelterShape.shelterShape,
  }

  render() {
    const { shelter } = this.props;
    return (
      <div className="Shelter col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{shelter.name}</h5>
          <p className="card-text">{shelter.location}</p>
          <Link className="btn btn-primary" to={`/shelter/${shelter.id}`}>View Shelter</Link>
        </div>
      </div>
    </div>
    );
  }
}

export default Shelter;
