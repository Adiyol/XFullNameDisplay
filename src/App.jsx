import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  
  function onSubmit(e) {
    e.preventDefault();
    setFullName(firstName + " " + lastName);
  }

  
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={onSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            if (e.target.value === "") {
              setFullName("");
            }
          }}
          required
        ></input>
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            if (e.target.value === "") {
              setFullName("");
            }
          }}
          required
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      {firstName && lastName && fullName ? (
        <p>{"Full Name: " + fullName}</p>
      ) : null}
    </>
  );
}

export default App;
