const config = {
    apiKey: "AIzaSyDmjCD-hHX_utJUBwqtRQzjNaJs3YxiT2g",
    authDomain: "to-do-app-fa0e8.firebaseapp.com",
    projectId: "to-do-app-fa0e8",
    storageBucket: "to-do-app-fa0e8.appspot.com",
    messagingSenderId: "586473652858",
    appId: "1:586473652858:web:e547f1d025297026cc71c3"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }