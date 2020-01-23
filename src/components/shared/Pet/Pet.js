import React from 'react';
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
          <img src={pet.image} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{pet.name}</h5>
            <button className="btn btn-danger" onClick={this.deletePetEvent}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;
