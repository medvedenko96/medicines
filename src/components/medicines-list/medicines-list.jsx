import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { COLLECTION_NAME } from '../../constants/main';
import { deleteMedicine } from '../../actions/medicines';
import ListItem from './list-item';
import Message from '../message';

const MedicinesList = ({ medicinesItems = [], deleteMedicine, onEdit }) => {
  return (
    <>
      {medicinesItems.map(item => (
        <ListItem
          key={item.id}
          {...item}
          onDelete={deleteMedicine}
          onEdit={onEdit}
        />
      ))}
      <Message />
    </>
  );
};

const mapStateToProps = ({ firestore: { ordered } }) => ({
  medicinesItems: ordered[COLLECTION_NAME],
});

export default compose(
  firestoreConnect([{ collection: COLLECTION_NAME }]),
  connect(mapStateToProps, { deleteMedicine }),
)(MedicinesList);
