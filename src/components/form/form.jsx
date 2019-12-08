import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { destroy } from 'redux-form';

import { createMedicine, updateMedicine } from '../../actions/medicines';
import FirstStep from '../form-steps/first-step';
import SecondStep from '../form-steps/second-step';
import { FORM_NAME } from '../form-steps/first-step';

import styles from './form.module.css';

const STEPS = {
  FIRST: 1,
  SECOND: 2,
};

const Form = ({
  isOpenForm,
  setOpenForm,
  setEditId,
  createMedicine,
  updateMedicine,
  editId,
  destroy,
}) => {
  const [step, setStep] = useState(STEPS.FIRST);
  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditId(null);
    setStep(STEPS.FIRST);
    destroy(FORM_NAME);
  };

  const onSubmit = values => {
    editId ? updateMedicine(values, editId) : createMedicine(values);
    handleCloseForm();
  };

  const steps = {
    [STEPS.FIRST]: (
      <FirstStep
        editId={editId}
        handleCloseForm={handleCloseForm}
        onSubmit={next}
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

export default connect(null, { createMedicine, updateMedicine, destroy })(Form);
