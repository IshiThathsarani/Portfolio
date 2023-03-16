//import logo from './logo.svg';
// import React, { Component } from "react";
// import $ from "jquery";
import code from './Assests/code.png';
import profilepic from './Assests/profilepic.jpg';
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
      <br/>
      <div id="profile">
          <div id="pic">
            <img src = {profilepic} alt="profile photo" id="dp"/>
          </div>
      </div>
      <div id="about">
                <div id="header">
                    <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64" >
                        <circle cx="32" cy="32" r="30" fill="#ed4c5c" ></circle></svg>
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" >
                        <circle cx="18" cy="18" r="18" fill="#FDCB58"></circle></svg>
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"  >
                        <circle cx="18" cy="18" r="18" fill="#78B159"></circle></svg>
                    <br/>
                
                    <div id="details">
                        <p>
                        Hi :
                        <br/>
                        <br/>
                        I'm Ishini Siriwardena. Currently, I am an undergraduate who is studying for a bachelor's in the field of ICT at the University of Sri Jayawardenapura.
                        I am an enthusiastic person who is carving to learn new things and face challenges. Thank you 
                      <br/>
                          <p> <a href='https://thathsaranisirwardena@gmail.com '>  contact me </a> </p>
                          <p><a href='https://www.linkedin.com/in/ishini-siriwardena/'> LinkdIn</a></p>
                    </p>
                    </div>
                </div>                
      </div> 
      <div id="projects">
                <h2> Projects </h2>
                <ul>
                    <li> Hospital Management System</li>
                    <li>App for the Department of ICT</li>
                    <li>Web Site of AI using html,css and js</li>
                </ul>
            </div>
    </div>
    
  );
}

export default App;
