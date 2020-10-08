import React from "react";
import Nav from "../components/UI/Nav";
import { Link } from "react-router-dom";

const Men = () => {
  const mockData = [
    {
      name: "item 0",
      id: 0,
    },
    {
      name: "item 1",
      id: 1,
    },
    {
      name: "item 2",
      id: 2,
    },
    {
      name: "item 3",
      id: 3,
    },
    {
      name: "item 4",
      id: 4,
    },
    {
      name: "item 5",
      id: 5,
    },
    {
      name: "item 6",
      id: 6,
    },
    {
      name: "item 7",
      id: 7,
    },
  ];
  return (
    <div>
      <h4>Men's</h4>
      {mockData.map((d) => {
        return (
          <div key={d.id}>
            <Link to={`/product/${d.id}`}>{d.name}</Link>
          </div>
        );
      })}
      <Nav />
    </div>
  );
};

export default Men;
