import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Empty, message } from 'antd';

import { COLLECTION_NAME } from '../../constants/main';
import { deleteMedicine } from '../../actions/medicines';
import ListItem from './list-item';

const MedicinesList = ({
  medicinesItems = [],
  deleteMedicine,
  onEdit,
  successMessage,
  errorMessage,
}) => {
  useEffect(() => {
    successMessage && message.success(successMessage, 3);
    errorMessage && message.error(errorMessage, 3);
  }, [successMessage, errorMessage]);

  return (
    <>
      {medicinesItems.length ? (
        medicinesItems.map(item => (
          <ListItem
            key={item.id}
            {...item}
            onDelete={deleteMedicine}
            onEdit={onEdit}
          />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </>
  );
};

MedicinesList.propTypes = {
  medicinesItems: PropTypes.array,
  deleteMedicine: PropTypes.func,
  onEdit: PropTypes.func,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

const mapStateToProps = ({
  firestore: { ordered },
  medicines: { successMessage, errorMessage },
}) => ({
  medicinesItems: ordered[COLLECTION_NAME],
  successMessage,
  errorMessage,
});

export default compose(
  firestoreConnect([{ collection: COLLECTION_NAME }]),
  connect(mapStateToProps, { deleteMedicine }),
)(MedicinesList);
