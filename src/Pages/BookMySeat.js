import React, { useState } from "react";

const BookMySeat = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const HandleFName = (event) => {
    setFname(event.target.value);
  };
  const HandleLName = (event) => {
    setLname(event.target.value);
  };
  const HandleGender = (event) => {
    setGender(event.target.value);
  };
  const HandleAge = (event) => {
    setAge(event.target.value);
  };
  const submit = () => {
    localStorage.setItem("FirstName", Fname);
    localStorage.setItem("LastName", Lname);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Age", age);
    setIsVisible(true);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={Fname}
          placeholder="FirstName"
          onChange={HandleFName}
        />
        <input
          type="text"
          value={Lname}
          placeholder="LastName"
          onChange={HandleLName}
        />
        <input
          type="text"
          value={gender}
          placeholder="gender"
          onChange={HandleGender}
        />
        <input
          type="number"
          value={age}
          placeholder="Age"
          onChange={HandleAge}
        />

        <button onClick={submit}>Submit</button>
      </form>

      {isVisible ? (
        <div>
          <div>{Fname}</div>
          <div>{Lname}</div>
          <div>{gender}</div>
          <div>{age}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BookMySeat;
