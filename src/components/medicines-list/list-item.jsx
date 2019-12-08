import React from 'react';
import { Tooltip, Button } from 'antd';

import styles from './medicines-list.module.css';

const ListItem = ({ id, code, name, price, handleDeleteMedicine }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <Tooltip placement="bottom" title={code}>
          <div>{code}</div>
        </Tooltip>
        <Tooltip placement="bottom" title={name}>
          <div>{name}</div>
        </Tooltip>
        <Tooltip placement="bottom" title={price}>
          <div>{price}</div>
        </Tooltip>
      </div>
      <div className={styles.control}>
        <Button onClick={() => {}}>Edit</Button>
        <Button onClick={() => handleDeleteMedicine(id)}>Delete</Button>
      </div>
    </div>
  );
};

export default ListItem;
