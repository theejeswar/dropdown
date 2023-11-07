import "./styles.css";
import React, { useState, usestate } from "react";

const countries = [
  { name: "India", value: "IND", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PAK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BAN", cities: ["Dhaka", "Chittagong"] }
];

export default function App() {
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });
  return (
    <div className="App">
      <select
        value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((item) => {
          return (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select value={country}>
        {countries[country] &&
          countries[country].cities.map((item, index) => {
            return (
              <option value={index} key={item}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
}
