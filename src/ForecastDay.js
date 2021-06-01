import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastDay(props) {
        //Variables for forecast days:
        let daysShort = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        let daysForecast = new Date(props.data.dt *1000);
        let dayShort = daysShort[daysForecast.getDay()];
    return (
        <div className="ForecastDay">
            <div className="forecast-date">{dayShort}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={60}/>
                <div className="forecast-temperature">
                    <span className="forecast-min">{Math.round(props.data.temp.min)}°</span>
                 <span className="forecast-max">{Math.round(props.data.temp.max)}°</span>
                </div>
        </div>
    );
}