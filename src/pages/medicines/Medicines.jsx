import React, { useState } from 'react';
import { Button } from 'antd';

import Form from '../../components/form';

import styles from './medicines.module.css';

const Medicines = () => {
  const [isOpenForm, setOpen] = useState(false);

  const handleOpenForm = () => setOpen(true);
  const handleCloseForm = () => setOpen(true);

  return (
    <div>
      <div>Medicines</div>
      <Form isOpenForm={isOpenForm} handleCloseForm={handleCloseForm} />
      <div className={styles.ButtonAddMedicines}>
        <Button
          onClick={handleOpenForm}
          type="primary"
          shape="circle"
          icon="plus"
        />
      </div>
    </div>
  );
};

export default Medicines;
