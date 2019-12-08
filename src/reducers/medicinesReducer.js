import {
  UPDATE_MEDICINE_SUCCESS,
  UPDATE_MEDICINE_ERROR,
  CREATE_MEDICINE_SUCCESS,
  CREATE_MEDICINE_ERROR,
  DELETE_MEDICINE_ERROR,
  DELETE_MEDICINE_SUCCESS,
} from '../actions/medicines';

const initialState = {};

const medicinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MEDICINE_SUCCESS:
    case CREATE_MEDICINE_SUCCESS:
    case DELETE_MEDICINE_SUCCESS:
      return {
        ...state,
        successMessage: action.payload,
      };
    case UPDATE_MEDICINE_ERROR:
    case CREATE_MEDICINE_ERROR:
    case DELETE_MEDICINE_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default medicinesReducer;
