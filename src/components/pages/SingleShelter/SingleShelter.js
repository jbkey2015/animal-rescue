import React from 'react';

import './SingleShelter.scss';
import shelterData from '../../../helpers/data/shelterData';
import petData from '../../../helpers/data/petData';
import Pet from '../../shared/Pet/Pet';

class SingleShelter extends React.Component {
  state = {
    shelter: {},
    pets: [],
  }

  getPetData = (shelterId) => {
    petData.getPetsByShelterId(shelterId)
      .then((pets) => this.setState({ pets }))
      .catch((err) => console.error('error in get pets', err));
  }

  componentDidMount() {
    const { shelterId } = this.props.match.params;
    shelterData.getSingleShelter(shelterId)
      .then((response) => {
        this.setState({ shelter: response.data });
        this.getPetData(shelterId);
      })
      .catch((err) => console.error('error in get single shelter', err));
  }

  deleteSinglePet = (petId) => {
    const { shelterId } = this.props.match.params;
    petData.deletePet(petId)
      .then(() => {
        this.getPetData(shelterId);
      })
      .catch((errorFromDeletePet) => console.error({ errorFromDeletePet }));
  }


  render() {
    const { shelter } = this.state;
    return (
      <div className="SingleShelter">
        <h1>{shelter.name}</h1>
        <p>{shelter.location}</p>
        <div className="pets d-flex flex-wrap">
          { this.state.pets.map((pet) => <Pet key={pet.id} pet={pet} deleteSinglePet={this.deleteSinglePet}/>)}
        </div>
      </div>
    );
  }
}

export default SingleShelter;
