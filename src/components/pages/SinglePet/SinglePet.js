import React from 'react';
import { Link } from 'react-router-dom';

import './SinglePet.scss';
import petData from '../../../helpers/data/petData';
import petShape from '../../../helpers/propz/petShape';

class SinglePet extends React.Component {
  state = {
    pet: {},
  }

  static propTypes = {
    pet: petShape.petShape,
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
    const { petId } = this.props.match.params;

    return (
      <div className="BackgroundPet">
      <div className="SinglePet">
        <h1 className="card-header">{pet.name}</h1>
        <img src={pet.image} className="card-img-top" alt=""/>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type: {pet.type}</li>
            <li className="list-group-item">Funds Needed to help {pet.name} get adopted: {pet.fundsNeeded}</li>
            <li className="list-group-item">Available Since: {pet.availableSince}</li>
            <li className="list-group-item">Age: {pet.age}</li>
            <li className="list-group-item">Gender: {pet.gender}</li>
            <li className="list-group-item">{pet.name} is a {pet.breed}</li>
            <Link className="btn btn-warning" to={`/shelter/${pet.shelterId}/pet/${petId}/edit`}>Edit</Link>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default SinglePet;
