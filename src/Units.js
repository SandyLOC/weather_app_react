import React, {useState} from "react";

export default function Units(props) {
    const [units, setUnits] = useState("metric");

    function showFahrenheit(event){
        event.preventDefault();
        setUnits("imperial");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnits("metric");
    }
    function fahrenheit() {
        return (props.temperature * 9) /5 + 32;
    }
    if (units === "metric") {
     return (
        <div className="Units">
        <span className="today" id="today">{Math.round(props.temperature)}</span>
        <span className="units"> °C |
            <a href="/" className="linkWeather" id="fahrenheit" onClick={showFahrenheit}> °F</a>
        </span>
        </div>
    );
    } else {
        return (
            <div className="Units">
            <span className="today" id="today">{Math.round(fahrenheit())}</span>
            <span className="units">
                <a href="/" className="linkWeather active" id="celcius" onClick={showCelsius}> °C</a> | °F
            </span>
            </div>
        );
    }
}