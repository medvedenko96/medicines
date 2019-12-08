import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  form: formReducer,
});

export default rootReducer;
