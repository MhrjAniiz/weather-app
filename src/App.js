import React, { Component } from "react";
import WeatherData from "./api/Api";
import SearchBar from "./component/SearchBar";
import Weather from "./component/Weather";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      humidity: "",
      currentTemp: "",
      maxTemp: "",
      minTemp: "",
      city: " ",
      description: "",
    };
  }

  tempConvert(temp) {
    const celcius = Math.floor(temp - 273.15);
    return celcius;
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const getdata = async () => {
      const fetchedData = await WeatherData.get("weather", {
        params: {
          q: this.state.city,
        },
      });
      console.log(fetchedData);
      this.setState({
        name: fetchedData.data.name,
        currentTemp: this.tempConvert(fetchedData.data.main.temp),
        maxTemp: this.tempConvert(fetchedData.data.main.temp_max),
        minTemp: this.tempConvert(fetchedData.data.main.temp_min),
        humidity: fetchedData.data.main.humidity,
        description: fetchedData.data.weather[0].description,
      });
    };
    getdata();
    this.setState({
      city: "",
    });
  };
  render() {
    const {
      name,
      currentTemp,
      maxTemp,
      minTemp,
      humidity,
      description,
    } = this.state;
    return (
      <div className="mainbody">
        <SearchBar
          handleChange={this.handleChange}
          city={this.state.city}
          handleSubmit={this.handleSubmit}
        />

        <Weather
          name={name}
          currentTemp={currentTemp}
          maxTemp={maxTemp}
          minTemp={minTemp}
          humidity={humidity}
          description={description}
        />
      </div>
    );
  }
}
