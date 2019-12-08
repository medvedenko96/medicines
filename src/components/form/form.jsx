import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';

import { createMedicine } from '../../actions/medicinesActions';
import FirstStep from '../form-steps/first-step';
import SecondStep from '../form-steps/second-step';

import styles from './form.module.css';

const STEPS = {
  FIRST: 1,
  SECOND: 2,
};

const Form = ({ isOpenForm, handleCloseForm, createMedicine }) => {
  const [step, setStep] = useState(STEPS.FIRST);
  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const onSubmit = values => {
    createMedicine(values);
    handleCloseForm();
  };

  const steps = {
    [STEPS.FIRST]: (
      <FirstStep onSubmit={next} handleCloseForm={handleCloseForm} />
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
});

export default connect(null, mapDispatchToProps)(Form);
