import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

import { TextArea } from '../fields';
import validate from './validate';
import { FORM_NAME } from './first-step';

import styles from './steps.module.css';
import PropTypes from 'prop-types';

const SecondStep = ({ handleSubmit, prev, handleCloseForm }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <Field
          name="compositionAndFormOfRelease"
          type="textarea"
          component={TextArea}
          label="Composition and releases form"
        />
        <Field
          name="indication"
          type="textarea"
          component={TextArea}
          label="Indication"
        />
        <Field
          name="contraindications"
          type="textarea"
          component={TextArea}
          label="Contraindications"
        />
      </div>
      <div className={styles.modalControl}>
        <Button onClick={handleCloseForm}>Cancel</Button>
        <Button onClick={prev}>Prev</Button>
        <Button htmlType="submit">Create/Edit</Button>
      </div>
    </Form>
  );
};

SecondStep.propTypes = {
  handleSubmit: PropTypes.func,
  handleCloseForm: PropTypes.func,
  prev: PropTypes.func,
};

export default reduxForm({
  form: FORM_NAME,
  destroyOnUnmount: false,
  validate,
})(SecondStep);
