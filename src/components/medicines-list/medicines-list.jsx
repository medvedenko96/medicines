import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getMedicines, deleteMedicine } from '../../actions/medicinesActions';
import ListItem from './list-item';

const MedicinesList = ({ medicines = [], getMedicines, deleteMedicine }) => {
  useEffect(() => getMedicines());

  return (
    <div>
      {medicines.map(item => (
        <ListItem
          key={item.id}
          {...item}
          handleDeleteMedicine={deleteMedicine}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ medicines: { data } }) => ({
  medicines: data,
});

const mapDispatchToProps = dispatch => ({
  getMedicines: () => dispatch(getMedicines()),
  deleteMedicine: id => dispatch(deleteMedicine(id)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  MedicinesList,
);
