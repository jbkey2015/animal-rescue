import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import petShape from '../../../helpers/propz/petShape';
import './Pet.scss';

class Pet extends React.Component {
  static propTypes = {
    pet: petShape.petShape,
    deletePetEvent: PropTypes.func,
  }

  deletePetEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePet, pet } = this.props;
    deleteSinglePet(pet.id);
  }


  render() {
    const { pet } = this.props;

    return (
      <div className="Pet col-3">
        <div className="card">
          <button className="close d-flex justify-content-end" onClick={this.deletePetEvent}>X</button>
          <img src={pet.image} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{pet.name}</h5>
            <Link className="btn btn-warning" to={`/shelter/${pet.shelterId}/pet/${pet.id}/edit`}>Edit</Link>
            <Link className="btn btn-link" to={`/shelter/${pet.shelterId}/pet/${pet.id}`}>View {pet.name}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;
