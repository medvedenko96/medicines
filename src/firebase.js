import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAzJWzG9j7r1TQF1z2OEvdEpPRU-d0eSRo',
  authDomain: 'medicines-ff914.firebaseapp.com',
  databaseURL: 'https://medicines-ff914.firebaseio.com',
  projectId: 'medicines-ff914',
  storageBucket: 'medicines-ff914.appspot.com',
  messagingSenderId: '519654111200',
  appId: '1:519654111200:web:edabbb32dfb60411671d85',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
