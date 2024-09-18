import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK6k0kTkrsO-VDRywaEnUR2dwbGsm4m7Y",
  authDomain: "react-nodejs-fullstack.firebaseapp.com",
  projectId: "react-nodejs-fullstack",
  storageBucket: "react-nodejs-fullstack.appspot.com",
  messagingSenderId: "358012112835",
  appId: "1:358012112835:web:96ad24439519749bbcf776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
