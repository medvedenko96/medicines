import React, { useState } from 'react';
import { Button } from 'antd';

import Form from '../../components/form';
import MedicinesList from '../../components/medicines-list';

import styles from './medicines.module.css';

const Medicines = () => {
  const [isOpenForm, setOpen] = useState(false);

  const handleOpenForm = () => setOpen(true);
  const handleCloseForm = () => setOpen(false);

  return (
    <div className={styles.medicines}>
      <MedicinesList />
      <Form isOpenForm={isOpenForm} handleCloseForm={handleCloseForm} />
      <div className={styles.buttonAddMedicines}>
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
