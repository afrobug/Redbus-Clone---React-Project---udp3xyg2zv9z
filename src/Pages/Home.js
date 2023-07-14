import React, { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { BusDetail } from "../components/BusDetail";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("data", data);
  return (
    <div>
      <Search />
      {data.length > 0 &&
        data.map((detail) => {
          return <BusDetail busName={detail.busName} arrivalTime={detail.arrivalTime} departureTime={detail.departureTime} ticketPrice={detail.ticketPrice} />;
        })}
    </div>
  );
};
