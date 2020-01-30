import React from 'react';

import './PetForm.scss';
import petData from '../../../helpers/data/petData';

class PetForm extends React.Component {
  state = {
    petName: '',
    petImage: '',
    petType: '',
    petFundsNeeded: '',
    petAvailableSince: '',
    petAge: '',
    petGender: '',
    petBreed: '',
  }

  componentDidMount() {
    const { petId } = this.props.match.params;
    if (petId) {
      petData.getSinglePet(petId)
        .then((request) => {
          const pet = request.data;
          this.setState({
            petName: pet.name,
            petImage: pet.image,
            petType: pet.type,
            petFundsNeeded: pet.fundsNeeded,
            petAvailableSince: pet.availableSince,
            petAge: pet.age,
            petGender: pet.gender,
            petBreed: pet.breed,
          });
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

  typeChange = (e) => {
    e.preventDefault();
    this.setState({ petType: e.target.value });
  }

  fundsNeededChange = (e) => {
    e.preventDefault();
    this.setState({ petFundsNeeded: e.target.value });
  }

  availableSinceChange = (e) => {
    e.preventDefault();
    this.setState({ petAvailableSince: e.target.value });
  }

  ageChange = (e) => {
    e.preventDefault();
    this.setState({ petAge: e.target.value });
  }

  genderChange = (e) => {
    e.preventDefault();
    this.setState({ petGender: e.target.value });
  }

  breedChange = (e) => {
    e.preventDefault();
    this.setState({ petbreed: e.target.value });
  }

  editPetEvent = (e) => {
    const { shelterId, petId } = this.props.match.params;
    e.preventDefault();
    const editPet = {
      name: this.state.petName,
      image: this.state.petImage,
      type: this.state.petType,
      fundsNeeded: this.state.petFundsNeeded,
      availableSince: this.state.petAvailableSince,
      age: this.state.petAge,
      gender: this.state.petGender,
      breed: this.state.petBreed,
      shelterId,
    };
    petData.editPet(petId, editPet)
      .then(() => this.props.history.push(`/shelter/${shelterId}/pet/${petId}`))
      .catch((err) => console.error('error with edit pet', err));
  }

  savePetEvent = (e) => {
    const { shelterId } = this.props.match.params;
    e.preventDefault();
    const newPet = {
      name: this.state.petName,
      image: this.state.petImage,
      type: this.state.petType,
      fundsNeeded: this.state.petFundsNeeded,
      availableSince: this.state.petAvailableSince,
      age: this.state.petAge,
      gender: this.state.petGender,
      breed: this.state.petBreed,
      shelterId,
    };
    petData.savePet(newPet)
      .then(() => this.props.history.push(`/shelter/${shelterId}`))
      .catch((err) => console.error('error with save pet', err));
  }

  render() {
    const {
      petName,
      petImage,
      petType,
      petFundsNeeded,
      petAvailableSince,
      petAge,
      petGender,
      petBreed,
    } = this.state;
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
          <label htmlFor="">Pet Type</label>
          <input
            type="text"
            className="form-control"
            id="pet-type"
            placeholder="Enter pet type"
            value={petType}
            onChange={this.typeChange}
          />
          <label htmlFor="">Pet Funds Needed</label>
          <input
            type="text"
            className="form-control"
            id="pet-funds-needed"
            placeholder="Enter pet funds needed"
            value={petFundsNeeded}
            onChange={this.fundsNeededChange}
          />
          <label htmlFor="">Pet Available Since</label>
          <input
            type="text"
            className="form-control"
            id="pet-available-since"
            placeholder="Enter Pet Available Since Date"
            value={petAvailableSince}
            onChange={this.availableSinceChange}
          />
          <label htmlFor="">Pet Age</label>
          <input
            type="text"
            className="form-control"
            id="pet-age"
            placeholder="Enter Pet Age"
            value={petAge}
            onChange={this.ageChange}
          />
          <label htmlFor="">Pet Gender</label>
          <input
            type="text"
            className="form-control"
            id="pet-gender"
            placeholder="Enter Pet Gender"
            value={petGender}
            onChange={this.genderChange}
          />
          <label htmlFor="">Pet Breed</label>
          <input
            type="text"
            className="form-control"
            id="pet-breed"
            placeholder="Enter Pet Breed"
            value={petBreed}
            onChange={this.breedChange}
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
