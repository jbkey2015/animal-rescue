import React from 'react';

import './SingleShelter.scss';

class SingleShelter extends React.Component {
  render() {
    const { shelterId } = this.props.match.params;
    return (
      <div className="SingleShelter">
        <h1>SingleShelter Page</h1>
        <h2>Current Shelter Id is {shelterId}</h2>
      </div>
    );
  }
}

export default SingleShelter;
