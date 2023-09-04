import React from "react";
import { useNavigate } from "react-router-dom";

export const BusCard = ({
  busName,
  arrivalTime,
  departureTime,
  ticketPrice,
}) => {
  const navigate = useNavigate();
  const handleBookNow = ()=>{
    navigate("/booking")
  }
  return (
    <div style={{ background: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          margin: "10px",
          fontSize: "30px",
          fontWeight:"600"
        }}
      >
        <div style={{width:"200px"}}>{busName}</div>
        <div>{arrivalTime}</div>
        <div>{departureTime}</div>
        <div style={{background:"#26d45c"}}>Rating:{ticketPrice / 100}/10</div>
        <div>{ticketPrice}/-</div>
        <button onClick={handleBookNow}>Book now</button>
      </div>
    </div>
  );
};
