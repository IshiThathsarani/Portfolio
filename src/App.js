//import logo from './logo.svg';
// import React, { Component } from "react";
// import $ from "jquery";
import code from './Assests/code.png';
import './App.css';

function App() {
  return (
    <div>
      <img src={code}  alt="code" id="code"/>      
      <div id="name">
        <h1>Ishini Thathsarani Perera Siriwardena </h1>
        <p> Student </p>
      </div>
      <div class="switch">
        <p>Dark Mode </p>
        <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </label>
      </div>
    
      
    </div>
    
  );
}

export default App;
