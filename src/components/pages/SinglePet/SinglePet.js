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
        <h1>{pet.name}</h1>
        <img src={pet.image} className="card-img-top" alt=""/>
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Type: {pet.type}</li>
            <li class="list-group-item">Funds Needed to help {pet.name} get adopted: {pet.fundsNeeded}</li>
            <li class="list-group-item">Available Since: {pet.availableSince}</li>
            <li class="list-group-item">Age: {pet.age}</li>
            <li class="list-group-item">Gender: {pet.gender}</li>
            <li class="list-group-item">{pet.name} is a {pet.breed}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SinglePet;
