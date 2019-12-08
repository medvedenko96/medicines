import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

import { Input } from '../fields';
import validate from './validate';

import styles from './steps.module.css';

const FirstStep = ({ handleSubmit, handleCloseForm }) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <Field name="code" type="text" component={Input} label="Code" />
          <Field name="name" type="text" component={Input} label="Name" />
          <Field name="price" type="text" component={Input} label="Price" />
          <Field
            name="shelfLife"
            type="text"
            component={Input}
            label="Expiration date"
          />
        </div>
        <div className={styles.modalControl}>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button htmlType="submit">Next</Button>
        </div>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'form',
  destroyOnUnmount: false,
  validate,
})(FirstStep);
