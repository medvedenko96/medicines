import React, { useState } from 'react';
import { Button } from 'antd';

import Form from '../../components/form';
import MedicinesList from '../../components/medicines-list';
import styles from './medicines.module.css';

const Medicines = () => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const onOpenForm = () => setOpenForm(true);
  const onEdit = id => {
    setEditId(id);
    onOpenForm();
  };

  return (
    <div className={styles.medicines}>
      <MedicinesList onEdit={onEdit} />
      <Form
        isOpenForm={isOpenForm}
        setOpenForm={setOpenForm}
        setEditId={setEditId}
        editId={editId}
      />
      <Button
        onClick={onOpenForm}
        className={styles.buttonAddMedicines}
        type="primary"
        shape="circle"
        icon="plus"
      />
    </div>
  );
};

export default Medicines;
