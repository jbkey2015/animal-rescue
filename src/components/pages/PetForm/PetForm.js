import React from 'react';

import './PetForm.scss';
import petData from '../../../helpers/data/petData';

class PetForm extends React.Component {
  state = {
    petName: '',
    petImage: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ petName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ petImage: e.target.value });
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
        <button className="btn btn-secondary" onClick={this.savePetEvent}>Save Pet</button>
      </form>
    );
  }
}

export default PetForm;
