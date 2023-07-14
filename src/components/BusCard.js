import React from "react";

export const BusCard = ({
  busName,
  arrivalTime,
  departureTime,
  ticketPrice,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "lightblue",
        padding: "5px",
        margin: "10px",
      }}
    >
      <div>{busName}</div>
      <div>{arrivalTime}</div>
      <div>{departureTime}</div>
      <div>Rating:{ticketPrice / 10}</div>
      <div>{ticketPrice}</div>
    </div>
  );
};
