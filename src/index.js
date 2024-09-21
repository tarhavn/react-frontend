import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBK6k0kTkrsO-VDRywaEnUR2dwbGsm4m7Y",
  authDomain: "react-nodejs-fullstack.firebaseapp.com",
  projectId: "react-nodejs-fullstack",
  storageBucket: "react-nodejs-fullstack.appspot.com",
  messagingSenderId: "358012112835",
  appId: "1:358012112835:web:96ad24439519749bbcf776"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
