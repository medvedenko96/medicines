import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

import { Input } from '../fields';
import styles from './steps.module.css';

const FirstStep = ({ handleSubmit, next }) => {
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
          <Button onClick={next}>Cancel</Button>
          <Button onClick={next}>Next</Button>
        </div>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'form',
  destroyOnUnmount: false,
})(FirstStep);
