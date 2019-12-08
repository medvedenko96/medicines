import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { reducer as formReducer } from 'redux-form';
import medicinesReducer from './medicinesReducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  form: formReducer,
  medicines: medicinesReducer,
});

export default rootReducer;
