import React from "react";
import Icons from "./Icons";
// import Icon from "./Icon.css";
// let todayDate = new Date();

const Weather = props => (
  <div className="weather__info">
    {props.city && (
      <p className="weather__key">
        {" "}
        Location:
        <span className="weather__value">{props.city.slice(7)}</span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        {" "}
        Temperature:
        <span className="weather__value">
          {" "}
          {Math.round(props.temperature)}
          &deg;C
        </span>
      </p>
    )}
    {props.currently && (
      <p className="weather__key">
        {" "}
        Summary:
        <span className="weather__value"> {props.currently}</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        {" "}
        Humidity:
        <span className="weather__value"> {props.humidity}</span>
      </p>
    )}

    {props.icon && (
      <div className="weather__key__icon">
        {" "}
        Conditions:
        <span className="weather__value__icon">
          {" "}
          <Icons icon={props.icon} />
        </span>
      </div>
    )}

    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
