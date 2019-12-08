import { COLLECTION_NAME } from '../constants/main';
import { generateId } from '../utils/utils';

export const CREATE_MEDICINE_SUCCESS = 'CREATE_MEDICINE_SUCCESS';
export const CREATE_MEDICINE_ERROR = 'CREATE_MEDICINE_ERROR';

export const createMedicine = medicine => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const id = generateId();
    return firestore
      .collection(COLLECTION_NAME)
      .doc(id)
      .set({
        ...medicine,
        id,
      })
      .then(() =>
        dispatch({
          type: CREATE_MEDICINE_SUCCESS,
          payload: `The medicine '${medicine.name}' has been created successfully`,
        }),
      )
      .catch(error =>
        dispatch({ type: CREATE_MEDICINE_ERROR, payload: error }),
      );
  };
};

export const DELETE_MEDICINE_SUCCESS = 'DELETE_MEDICINE_SUCCESS';
export const DELETE_MEDICINE_ERROR = 'DELETE_MEDICINE_ERROR';

export const deleteMedicine = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore
      .collection(COLLECTION_NAME)
      .doc(id)
      .delete()
      .then(() =>
        dispatch({
          type: DELETE_MEDICINE_SUCCESS,
          payload: `The medicine has been deleted`,
        }),
      )
      .catch(error =>
        dispatch({ type: DELETE_MEDICINE_ERROR, payload: error }),
      );
  };
};

export const UPDATE_MEDICINE_SUCCESS = 'UPDATE_MEDICINE_SUCCESS';
export const UPDATE_MEDICINE_ERROR = 'UPDATE_MEDICINE_ERROR';

export const updateMedicine = (medicine, id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore
      .collection(COLLECTION_NAME)
      .doc(id)
      .update({
        ...medicine,
        id,
      })
      .then(() =>
        dispatch({
          type: UPDATE_MEDICINE_SUCCESS,
          payload: `The medicine '${medicine.name}' has been updated successfully`,
        }),
      )
      .catch(error =>
        dispatch({ type: UPDATE_MEDICINE_ERROR, payload: error }),
      );
  };
};
