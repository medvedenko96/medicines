import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';

import { createMedicine, updateMedicine } from '../../actions/medicinesActions';
import FirstStep from '../form-steps/first-step';
import SecondStep from '../form-steps/second-step';

import styles from './form.module.css';

const STEPS = {
  FIRST: 1,
  SECOND: 2,
};

const Form = ({
  isOpenForm,
  onCloseForm,
  createMedicine,
  updateMedicine,
  editId,
}) => {
  const [step, setStep] = useState(STEPS.FIRST);
  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleCloseForm = () => {
    onCloseForm();
    setStep(STEPS.FIRST);
  };

  const onSubmit = values => {
    editId ? updateMedicine(values, editId) : createMedicine(values);
    handleCloseForm();
  };

  const steps = {
    [STEPS.FIRST]: (
      <FirstStep
        editId={editId}
        onSubmit={next}
        handleCloseForm={handleCloseForm}
      />
    ),
    [STEPS.SECOND]: (
      <SecondStep
        prev={prev}
        handleCloseForm={handleCloseForm}
        onSubmit={onSubmit}
      />
    ),
  };

  return (
    <Modal footer={null} closable={false} visible={isOpenForm}>
      <>
        <div className={styles.modalTitle}>{`Add/edit medicine ${step}/2`}</div>
        {steps[step]}
      </>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  createMedicine: medicine => dispatch(createMedicine(medicine)),
  updateMedicine: (medicine, id) => dispatch(updateMedicine(medicine, id)),
});

export default connect(null, mapDispatchToProps)(Form);
