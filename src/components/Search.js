import React, { useEffect, useState } from "react";
import swap from "./swap.png";
import "../styles/App.css";
import { useDispatch } from "react-redux";
import { getSearchList } from "../Redux/BusSlice";
import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export const Search = () => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  // const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [date, setDate] = useState(dayjs(new Date()));

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
          height: "100px",
          alignItems: "center",
          marginLeft: "250px",
        }}
      >
        <label className="labels">FROM</label>
        <input
          style={{ textAlign: "center" }}
          name="from"
          type="text"
          value={from}
          onChange={handleFrom}
          className="fields"
        />
        <span onClick={swapDestinations}>
          <a className="clickable-image">
            <img src={swap} alt="arrow" width={30} height={30}></img>
          </a>
        </span>

        <label className="labels" style={{ marginLeft: "20px" }}>
          TO
        </label>

        <input
          style={{ textAlign: "center" }}
          name="destination"
          type="text"
          value={destination}
          onChange={handleDestination}
          className="fields"
        />
        <label className="labels">DATE</label>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              disablePast
              label=""
              value={date}
              onChange={handleDate}
            />
          </DemoContainer>
        </LocalizationProvider>

        <button
          className="searchButton"
          onClick={() => dispatch(getSearchList({ from, destination }))}
        >
          SEARCH BUSES
        </button>
      </div>
    </div>
  );
};
