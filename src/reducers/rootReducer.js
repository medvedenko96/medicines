import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import medicinesReducer from './medicinesReducer';

const rootReducer = combineReducers({
  firestoreGoals: firestoreReducer,
  medicines: medicinesReducer,
});

export default rootReducer;
