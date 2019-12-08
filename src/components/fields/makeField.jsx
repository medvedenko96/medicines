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
      {hasError && (
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 6 }} />
          <Col xs={{ span: 24 }} sm={{ span: 18 }}>
            <div className={styles.error}>{meta.error}</div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default makeField;
