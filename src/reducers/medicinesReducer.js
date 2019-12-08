import { GET_MEDICINES } from '../constants/actionTypes';

const medicinesReducer = (state = {}, action) => {
  const { data } = action;

  switch (action.type) {
    case GET_MEDICINES:
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
};

export default medicinesReducer;
