import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import firebase from './firebase';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore })),
    reduxFirestore(firebase),
    composeWithDevTools(),
  ),
);

const rrfProps = {
  firebase,
  config: { userProfile: 'users' },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
