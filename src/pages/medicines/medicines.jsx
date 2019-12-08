import React, { useState } from 'react';
import { Button } from 'antd';

import Form from '../../components/form';
import MedicinesList from '../../components/medicines-list';

import styles from './medicines.module.css';

const Medicines = () => {
  const [isOpenForm, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleOpenForm = () => setOpen(true);

  const onEdit = id => {
    setEditId(id);
    handleOpenForm();
  };

  const onCloseForm = () => {
    setOpen(false);
    setEditId(null);
  };

  return (
    <div className={styles.medicines}>
      <MedicinesList onEdit={onEdit} />
      <Form isOpenForm={isOpenForm} onCloseForm={onCloseForm} editId={editId} />
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
