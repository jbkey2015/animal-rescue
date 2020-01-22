import PropTypes from 'prop-types';

const shelterShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

export default { shelterShape };
