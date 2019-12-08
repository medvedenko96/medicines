import React, { useState } from 'react';
import { Modal } from 'antd';

import FirstStep from '../form-steps/first-step';
import SecondStep from '../form-steps/second-step';

import styles from './form.module.css';

const STEPS = {
  FIRST: 1,
  SECOND: 2,
};

const Form = ({ isOpenForm, handleCloseForm }) => {
  const [step, setStep] = useState(STEPS.FIRST);
  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const steps = {
    [STEPS.FIRST]: (
      <FirstStep onSubmit={next} handleCloseForm={handleCloseForm} />
    ),
    [STEPS.SECOND]: (
      <SecondStep prev={prev} handleCloseForm={handleCloseForm} />
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

export default Form;
