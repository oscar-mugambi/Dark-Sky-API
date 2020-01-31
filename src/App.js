import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
// import Icons from "./components/Icons";
import WeekWeather from "./components/WeekWeather";

let lat, lon;

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    currently: undefined,
    time: undefined,
    tomorrow: undefined,
    currentWeather: undefined,
    icon: undefined,
    summary: undefined,
    chanceOfRain: undefined,
    humidity: undefined,
    week: []
  };

  getWeather = async e => {
    const date = e.target.elements.date.value;

    e.preventDefault();
    if ("geolocation" in navigator) {
      console.log("geolocation available");
      navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        if (date) {
          // console.log("got date");
          const unixdate = new Date(date).getTime() / 1000;

          // console.log(unixdate);
          const api_url = `/weather/${lat},${lon},${unixdate}`;

          fetch(api_url)
            .then(res => res.json())
            .then(data => {
              // console.log(data);
              this.setState({
                temperature: data.currently.temperature,
                humidity: data.currently.temperature,
                chanceOfRain: data.currently.precipProbability,
                icon: data.currently.icon,
                city: data.timezone,
                time: data.currently.time,
                currently: data.currently.summary,
                summary: data.daily.data.summary
              });
            });
        } else {
          console.log("no date provided");
          // const today = Math.floor(Date.now() / 1000);
          const api_url = `/weather/${lat},${lon}`;

          fetch(api_url)
            .then(res => res.json())
            .then(data => {
              const weekWeather = data.daily.data;
              let tempDay = [];
              weekWeather.forEach(element => {
                const singleItem = { ...element };
                tempDay = [...tempDay, singleItem];

                this.setState({
                  week: tempDay
                });
              });

              this.setState({
                temperature: data.currently.temperature,
                humidity: data.currently.temperature,
                chanceOfRain: data.currently.precipProbability,
                icon: data.currently.icon,
                city: data.timezone,
                time: data.currently.time,
                currently: data.currently.summary,
                summary: data.daily.data.summary
              });
            });
        }
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  };

  render() {
    return (
      <div>
        <div className="title-container">
          <Titles />
        </div>
        <div className="form-container">
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            currently={this.state.currently}
            city={this.state.city}
            summary={this.state.summary}
            time={this.state.time}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
            icon={this.state.icon}
            humidity={this.state.humidity}
            chanceOfRain={this.state.chanceOfRain}
          />
          <WeekWeather week={this.state.week} />
        </div>
      </div>
    );
  }
}

export default App;
