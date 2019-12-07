import React from 'react';
import { Form } from 'antd';

import styles from './field.module.css';

const makeField = Component => ({
  meta,
  children,
  hasFeedback,
  label,
  input,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <Form.Item
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
      label={label}
    >
      <Component {...rest} {...input} children={children} />
    </Form.Item>
  );
};

export default makeField;
