import React, { useState } from "react";
import swap from "./swap.png";
import "../styles/App.css";
import { useDispatch } from "react-redux";
import { getSearchList } from "../Redux/BusSlice";
import Mui from "../Pages/mui.js";

export const Search = () => {
  const dispatch = useDispatch();
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

  const swapDestinations = () => {
    const temp = from;
    setFrom(destination);
    setDestination(temp);
  };
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          margin: "50px",
          backgroundColor: "whitesmoke",
          display: "flex",
          width: "1100px",
          height:"100px",
          alignItems: "center",
          marginLeft: "250px",
        }}
      >
        <label className="labels">FROM</label>
        <input
          name="from"
          type="text"
          placeholder="Source"
          value={from}
          onChange={handleFrom}
          className="fields"
        />
        <span
        
          onClick={swapDestinations}
        >
          <a class="clickable-image">
            <img src={swap} alt="arrow" width={30} height={30}></img>
          </a>
        </span>

        <label className="labels" style={{ marginLeft: "20px" }}>
          TO
        </label>

        <input
          name="destination"
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={handleDestination}
          className="fields"
        />
        <label className="labels">DATE</label>

        <input
          name="date"
          type="date"
          placeholder="Date"
          value={date}
          onChange={handleDate}
          className="fields"
        />
        <button
          className="searchButton"
          onClick={() => dispatch(getSearchList({ from, destination }))}
        >
          SEARCH BUSES
        </button>
        {/* <Mui /> */}
      </div>
    </div>
  );
};
