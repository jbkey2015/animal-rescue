import React from 'react';

import './PetForm.scss';
import petData from '../../../helpers/data/petData';

class PetForm extends React.Component {
  state = {
    petName: '',
    petImage: '',
  }

  componentDidMount() {
    const { petId } = this.props.match.params;
    if (petId) {
      petData.getSinglePet(petId)
        .then((request) => {
          const pet = request.data;
          this.setState({ petName: pet.name, petImage: pet.image });
        })
        .catch((err) => console.error('error with get single pet', err));
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ petName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ petImage: e.target.value });
  }

  editPetEvent = (e) => {
    const { shelterId, petId } = this.props.match.params;
    e.preventDefault();
    const editPet = {
      name: this.state.petName,
      image: this.state.petImage,
      shelterId,
    };
    petData.editPet(petId, editPet)
      .then(() => this.props.history.push(`/shelter/${shelterId}`))
      .catch((err) => console.error('error with edit pet', err));
  }

  savePetEvent = (e) => {
    const { shelterId } = this.props.match.params;
    e.preventDefault();
    const newPet = {
      name: this.state.petName,
      image: this.state.petImage,
      shelterId,
    };
    petData.savePet(newPet)
      .then(() => this.props.history.push(`/shelter/${shelterId}`))
      .catch((err) => console.error('error with save pet', err));
  }

  render() {
    const { petName, petImage } = this.state;
    const { petId } = this.props.match.params;

    return (
      <form className="PetForm">
        <div className="form-group">
          <label htmlFor="">Pet Name</label>
          <input
            type="text"
            className="form-control"
            id="pin-name"
            placeholder="Enter pet name"
            value={petName}
            onChange={this.nameChange}
          />
          <label htmlFor="">Pet Image</label>
          <input
            type="text"
            className="form-control"
            id="pet-image"
            placeholder="Enter pet image url"
            value={petImage}
            onChange={this.imageChange}
          />
        </div>
        { petId
          ? <button className="btn btn-secondary" onClick={this.editPetEvent}>Edit Pet</button>
          : <button className="btn btn-secondary" onClick={this.savePetEvent}>Save Pet</button>
        }
      </form>
    );
  }
}

export default PetForm;
