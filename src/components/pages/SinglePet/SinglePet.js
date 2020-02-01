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
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="jbk_1_tn@yahoo.com" />
          <input type="hidden" name="item_name" value="Donations for animal rescues" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        </form>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type: {pet.type}</li>
            <li className="list-group-item">
              Funds Needed to help {pet.name} get adopted: {pet.fundsNeeded}
            </li>
              <button className="btn btn-primary">Donate</button>
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
