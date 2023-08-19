import React, { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { BusDetail } from "../components/BusDetail";
import bookFooter from "./bookfooter.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getBusList,
  sortByArrival,
  sortByDeparture,
  sortByPrice,
} from "../Redux/BusSlice";
import "../styles/App.css";
import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Navbar from "../components/navbar";

export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.bus.busData);

  const sortPrice = () => {
    dispatch(sortByPrice());
  };
  const sortArrival = () => {
    dispatch(sortByArrival());
  };
  const sortDeparture = () => {
    dispatch(sortByDeparture());
  };
  return (
    <div>
      <Navbar />
      <Search />

      <div style={{ background: "red", padding: "10px 100px" }}>
        {data.length > 0 && (
          <div className="horizontal-sort-by">
            <span className="sortBy">SORT BY:</span>
            <label className="sortByLabels" onClick={sortDeparture}>
              Departure
            </label>
            <label className="sortByLabels" onClick={sortArrival}>
              Arrival
            </label>
            <label className="sortByLabels" onClick={sortPrice}>
              Rating
            </label>
            <label className="sortByLabels" onClick={sortPrice}>
              Price
            </label>
          </div>
        )}
        {data.map((detail, index) => {
          return (
            <BusDetail
              key={index}
              busName={detail.busName}
              arrivalTime={detail.arrivalTime}
              departureTime={detail.departureTime}
              ticketPrice={detail.ticketPrice}
            />
          );
        })}
      </div>
      <img src={bookFooter} alt="footer" width={"100%"}></img>
    </div>
  );
};
