import { useRef, useState } from "react";
import "./App.css";

function App() {
  let firstName = useRef();
  let lastName = useRef();

  const [fullName, setFullName] = useState("");
  function onSubmit(e) {
    e.preventDefault()
    console.log(firstName.current.value, lastName.current.value, "values")
    setFullName(firstName.current.value + " " + lastName.current.value);
  }

  // function onInvalid(e) {
  //   console.log("Invalid")
  // }

  function checkFilled() {
    if(firstName.current && lastName.current) {
      if(firstName.current.value && lastName.current.value) {
        return true
      } else {
         false
      }
    } else {
      return false
    }
  }
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={onSubmit} >
        <label>First Name: </label>
        <input type="text" ref={firstName} required></input>
        <br />
        <label>Last Name: </label>
        <input type="text" ref={lastName} required ></input>
        <br />
        <button  type="submit">Submit</button>
      </form>
        {(checkFilled()) ? (<p>{"Full Name: " + fullName}</p>) : null}
      
    </>
  );
}

export default App;
