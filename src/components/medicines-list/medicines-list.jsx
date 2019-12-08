import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { COLLECTION_NAME } from '../../constants/main';
import { deleteMedicine } from '../../actions/medicinesActions';
import ListItem from './list-item';

const MedicinesList = ({ medicines = [], deleteMedicine, onEdit }) => {
  return (
    <div>
      {medicines.map(item => (
        <ListItem
          key={item.id}
          {...item}
          onDelete={deleteMedicine}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ firestore: { ordered } }) => ({
  medicines: ordered[COLLECTION_NAME],
});

const mapDispatchToProps = dispatch => ({
  deleteMedicine: id => dispatch(deleteMedicine(id)),
});

export default compose(
  firestoreConnect([{ collection: COLLECTION_NAME }]),
  connect(mapStateToProps, mapDispatchToProps),
)(MedicinesList);
