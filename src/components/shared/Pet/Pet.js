import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Pet.scss';

class Pet extends React.Component {
  static propTypes = {
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
        <div className="petcard card">
          <div className="Pets">
          <button className="delete" onClick={this.deletePetEvent}>X</button>
          <img src={pet.image} className="card-img-top" alt=""/>
          <div className="card-body">
            <Link className="col btn btn-dark-moon btn-rounded" to={`/shelter/${pet.shelterId}/pet/${pet.id}`}>View {pet.name}</Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;
