import React from 'react';

import './SinglePet.scss';
import petData from '../../../helpers/data/petData';

class SinglePet extends React.Component {
  state = {
    pet: {},
  }

  componentDidMount() {
    const { petId } = this.props.match.params;
    petData.getSinglePet(petId)
      .then((response) => {
        this.setState({ pet: response.data });
      })
      .catch((err) => console.error('error in get single pet', err));
  }


  render() {
    const { pet } = this.state;

    return (
      <div className="SinglePet">
        <p>single pet</p>
        <h1>{pet.name}</h1>
        <img src={pet.image} className="card-img-top" alt=""/>
      </div>
    );
  }
}

export default SinglePet;
