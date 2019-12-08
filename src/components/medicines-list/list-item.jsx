import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button } from 'antd';

import styles from './medicines-list.module.css';

const ListItem = ({ id, code, name, price, onDelete, onEdit }) => {
  return (
    <div className={styles.item} onDoubleClick={() => onEdit(id)}>
      <div className={styles.content}>
        <Tooltip placement="bottomLeft" title={code}>
          <div>{code}</div>
        </Tooltip>
        <Tooltip placement="bottomLeft" title={name}>
          <div>{name}</div>
        </Tooltip>
        <Tooltip placement="bottomLeft" title={price}>
          <div>{price}</div>
        </Tooltip>
      </div>
      <div className={styles.control}>
        <Button onClick={() => onEdit(id)}>Edit</Button>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.string,
  code: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ListItem;
