import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Weather = ({
  name,
  currentTemp,
  maxTemp,
  minTemp,
  humidity,
  description,
}) => {
  return (
    <div>
      {name === "" ? (
        <Card className="cardbody">
          <CardContent className="cardcontent">
            <h1 className="header">search for your city weather</h1>
          </CardContent>
        </Card>
      ) : (
        <Card className="cardbody">
          <CardContent className="cardcontent">
            <h1 className="header">{name}</h1>
            <div className="content">
              <h2>Weather : {description}</h2>
              <h2>Current Temp: {currentTemp} °C</h2>
              <h2>Maximum Temp: {maxTemp} °C</h2>
              <h2>Minimum Temp: {minTemp} °C</h2>
              <h2>Humidity : {humidity} %</h2>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Weather;
