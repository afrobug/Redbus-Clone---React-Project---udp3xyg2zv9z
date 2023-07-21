import React, { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { BusDetail } from "../components/BusDetail";
import bookFooter from "./bookfooter.png";
import { useDispatch,useSelector } from "react-redux";
import { getBusList } from "../Redux/BusSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.bus.busData)

  useEffect(() => {
    dispatch(getBusList())
  }, []);
  return (
    <div>
      <Search />
      <div style={{ background: "red", padding: "10px 100px" }}>
        <div>
        <div className="horizontal-sort-by">
      <span className="label">Sort by:</span>
      <label >
        Departure
      </label>
      <label >
        Arrival
      </label>
      <label >
        Rating
        <input
          type="radio"
          name="sort"
          value="rating"
        />
      </label>
      <label >
        Price
        <input
          type="radio"
          name="sort"
          value="price"
        />
      </label>
    </div>
        </div>
        {data.length > 0 &&
          data.map((detail,index) => {
            return (
              <BusDetail key={index}
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
