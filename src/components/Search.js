import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import switchArrows from "./icon.png";

export const Search = () => {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [isForward, setIsForward] = useState(true);

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const toggleIcon = () => {
    setIsForward(!isForward);
  };

  return (
    <div>
      <label>FROM</label>
      <input
        name="from"
        type="text"
        placeholder="Source"
        value={from}
        onChange={handleFrom}
      />
      <img src={switchArrows} alt="arrow" width={30} height={30}></img>

      <label>TO</label>

      <input
        name="destination"
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={handleDestination}
      />
      <label>DATE</label>

      <input
        name="date"
        type="date"
        placeholder="Date"
        value={date}
        onChange={handleDate}
      />
      <button
        style={{
          background: "#d41111",
          color: "white",
          border: "none",
          fontSize: "1rem",
          padding: "4px 4px",
        }}
      >
        SEARCH BUSES
      </button>
    </div>
  );
};
