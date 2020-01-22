import React from 'react';

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
          <button className="btn btn-primary" onClick={this.setSelectedShelterId}>View Pets</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Shelter;
