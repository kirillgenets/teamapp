import PropTypes from 'prop-types';

export default {
	taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	teamId: PropTypes.number.isRequired,
};
