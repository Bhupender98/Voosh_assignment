import React, { useState } from "react";
import "./App.css";
import Demo from "./Components/Demo";
import Navbar from "./Components/Navbar";
import RegistrationForm from "./Components/RegistrationForm";

function App() {
  const localStorageData = JSON.parse(localStorage.getItem("new_Customer"));
  const [loggedIn, setLoggedIn] = useState(localStorageData== null)
  return (
    <div>
      <Navbar />
      {
        loggedIn?(<><Demo/><RegistrationForm/></>):(<h1>{"Welcome: "+ localStorageData.name}</h1>)
      }
      {/* <Demo />
      <RegistrationForm /> */}
    </div>
  );
}

export default App;
