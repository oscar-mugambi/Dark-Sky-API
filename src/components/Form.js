import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input
      className="date-picker"
      type="date"
      name="date"
      placeholder="date..."
    />
    <button>Get Weather </button>
  </form>
);

export default Form;
