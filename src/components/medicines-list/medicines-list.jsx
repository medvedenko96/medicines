import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Empty } from 'antd';

import { COLLECTION_NAME } from '../../constants/main';
import { deleteMedicine } from '../../actions/medicines';
import ListItem from './list-item';
import Message from '../message';

const MedicinesList = ({ medicinesItems = [], deleteMedicine, onEdit }) => {
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
      <Message />
    </>
  );
};

MedicinesList.propTypes = {
  medicinesItems: PropTypes.array,
  deleteMedicine: PropTypes.func,
  onEdit: PropTypes.func,
};

const mapStateToProps = ({ firestore: { ordered } }) => ({
  medicinesItems: ordered[COLLECTION_NAME],
});

export default compose(
  firestoreConnect([{ collection: COLLECTION_NAME }]),
  connect(mapStateToProps, { deleteMedicine }),
)(MedicinesList);
