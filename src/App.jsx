import { useRef, useState } from "react";
import "./App.css";

function App() {
  let firstName = useRef();
  let lastName = useRef();

  const [fullName, setFullName] = useState("");
  function onSubmit(e) {
    e.preventDefault()
    setFullName(firstName.current.value + " " + lastName.current.value);
  }
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={onSubmit}>
        <label>First Name: </label>
        <input type="text" ref={firstName} required></input>
        <br />
        <label>Last Name: </label>
        <input type="text" ref={lastName} required></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      {"Full Name: " + fullName}
    </>
  );
}

export default App;
