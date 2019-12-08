import PropTypes from 'prop-types';
import { message } from 'antd';
import { connect } from 'react-redux';

const Message = ({ successMessage, errorMessage }) => {
  successMessage && message.success(successMessage, 3);
  errorMessage && message.error(errorMessage, 3);

  return null;
};

Message.propTypes = {
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

const mapStateToProps = ({ medicines: { successMessage, errorMessage } }) => ({
  successMessage,
  errorMessage,
});

export default connect(mapStateToProps)(Message);
