import React from "react";

export const BusCard = ({
  busName,
  arrivalTime,
  departureTime,
  ticketPrice,
}) => {
  return (
    <div style={{ background: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          margin: "10px",
          fontSize: "30px",
        }}
      >
        <div style={{width:"200px"}}>{busName}</div>
        <div>{arrivalTime}</div>
        <div>{departureTime}</div>
        <div>Rating:{ticketPrice / 10}</div>
        <div>{ticketPrice}</div>
      </div>
    </div>
  );
};
