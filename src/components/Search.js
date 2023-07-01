import React, { useState } from "react";

export const Search = () => {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <input
        name="from"
        type="text"
        placeholder="From"
        value={from}
        onChange={handleFrom}
      />
      <input
        name="destination"
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={handleDestination}
      />
      <input
        name="date"
        type="date"
        placeholder="Date"
        value={date}
        onChange={handleDate}
      />
    </div>
  );
};
