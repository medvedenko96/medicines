import { CREATE_MEDICINE, GET_MEDICINES } from '../constants/actionTypes';
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
      })
      .then(() => {
        dispatch({ type: CREATE_MEDICINE, medicines });
      });
  };
};

export const getMedicines = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection(COLLECTION_NAME)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        dispatch({ type: GET_MEDICINES, data });
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

export const updateMedicine = (Medicine, id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection(COLLECTION_NAME)
      .doc(id)
      .update({
        ...Medicine,
      });
  };
};
