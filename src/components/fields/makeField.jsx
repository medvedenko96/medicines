import React from 'react';
import { Row, Col } from 'antd';

import styles from './field.module.css';

const makeField = (Component, fieldProps) => ({
  meta,
  children,
  hasFeedback,
  label,
  input,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <div className={styles.field}>
      <Row type="flex">
        <Col className={styles.label} xs={{ span: 24 }} sm={{ span: 6 }}>
          <label>{label}</label>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 18 }}>
          <Component {...rest} {...input} children={children} {...fieldProps} />
        </Col>
      </Row>
    </div>
  );
};

export default makeField;

// return (
//     <Form.Item
//         validateStatus={hasError ? 'error' : 'success'}
//         hasFeedback={hasFeedback && hasError}
//         help={hasError && meta.error}
//         label={label}
//     >
//       <Component {...rest} {...input} children={children} />
//     </Form.Item>
// );
