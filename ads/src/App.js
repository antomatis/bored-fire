import React, { useState, useEfect } from 'react';
import './App.css';


import AddTimeEntryForm from "./components/add-time-entry-form";
import TimesList from "./components/times-list";

// import firebase from './firebase'; 

// firebase.firestore().collection('times').add({
//   title: "Rubiks Cube",
//   time_seconds: 45
// })


function App() {
  return (
    <div className="App">
     <h1>Just Clock IT</h1>
     <TimesList />
     <AddTimeEntryForm />
    </div>
  );
}

export default App;
