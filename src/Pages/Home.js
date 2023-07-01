import React from "react";
import { Search } from "../components/Search";
import { BusDetail } from "../components/BusDetail";
import { BusCard } from "../components/BusCard";

export const Home = () => {
  return (
    <div>
      <Search />
      <BusDetail />
    </div>
  );
};
