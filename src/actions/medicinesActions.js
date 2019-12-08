import { COLLECTION_NAME } from '../constants/main';
import { generateId } from '../utils/utils';

export const createMedicine = medicines => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const id = generateId();
    firestore
      .collection(COLLECTION_NAME)
      .doc(id)
      .set({
        ...medicines,
        id,
      });
  };
};

export const deleteMedicine = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection(COLLECTION_NAME)
      .doc(id)
      .delete();
  };
};

export const updateMedicine = (medicine, id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection(COLLECTION_NAME)
      .doc(id)
      .update({
        ...medicine,
        id,
      });
  };
};
