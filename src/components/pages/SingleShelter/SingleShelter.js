import React from 'react';
import { Link } from 'react-router-dom';

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
    const { shelterId } = this.props.match.params;

    return (
      <div className="SingleShelter">
        <h1 className="shelterName">{shelter.name}</h1>
        <Link className="btn btn-primary" to={`/shelter/${shelterId}/pet/new`}>Add a Pet</Link>
        <div className="pets d-flex flex-wrap">
          { this.state.pets.map((pet) => <Pet key={pet.id} pet={pet} deleteSinglePet={this.deleteSinglePet}/>)}
        </div>
      </div>
    );
  }
}

export default SingleShelter;
