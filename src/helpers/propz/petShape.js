import PropTypes from 'prop-types';

const petShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  shelterId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fundsNeeded: PropTypes.string.isRequired,
  availableSince: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
});

export default { petShape };
