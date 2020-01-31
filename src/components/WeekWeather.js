import React from "react";
import "../App.css";

export default function WeekWeather({ week }) {
  let days = [...week];
  const today = new Date();
  const tomorrow = new Date(today);
  const day3 = new Date(today);
  const day4 = new Date(today);
  const day5 = new Date(today);
  const day6 = new Date(today);
  const day7 = new Date(today);
  const day8 = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  day3.setDate(day3.getDate() + 2);
  day4.setDate(day4.getDate() + 3);
  day5.setDate(day5.getDate() + 4);
  day6.setDate(day6.getDate() + 5);
  day7.setDate(day7.getDate() + 6);
  day8.setDate(day8.getDate() + 7);

  const eachDay =
    week.length === 8 ? (
      <div className="forecast">
        <h1>Your 7 day Forecast</h1>
        <p>
          {tomorrow.toDateString()}:
          <span className="weekly-value">{days[1].summary}</span>
        </p>
        <p>
          {day3.toDateString()}:{" "}
          <span className="weekly-value">{days[2].summary}</span>
        </p>
        <p>
          {day4.toDateString()}:{" "}
          <span className="weekly-value">{days[3].summary}</span>
        </p>
        <p>
          {day5.toDateString()}:{" "}
          <span className="weekly-value">{days[4].summary}</span>
        </p>
        <p>
          {day6.toDateString()}:{" "}
          <span className="weekly-value">{days[5].summary}</span>
        </p>
        <p>
          {day7.toDateString()}:{" "}
          <span className="weekly-value">{days[6].summary}</span>
        </p>
        <p>
          {day8.toDateString()}:{" "}
          <span className="weekly-value">{days[7].summary}</span>
        </p>
      </div>
    ) : (
      <p className="no-weekly"> Click Button to Receive 7 day forecast</p>
    );
  return <div className="weekly">{eachDay}</div>;
}
