import React, { useState } from 'react';
import { Modal } from 'antd';

const Form = ({ isOpenForm }) => {
  const [step, setStep] = useState(1);
  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const steps = {
    1: <div>step1</div>,
    2: <div>step2</div>,
  };

  return <Modal visible={isOpenForm}>{steps[step]}</Modal>;
};

export default Form;
