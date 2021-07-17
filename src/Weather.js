import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Info from "./Info.js";
import Forecast from "./Forecast.js";
//import ForecastTrial from "./ForecastTrial.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css"

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({loaded: false});
    function showTemperature(response) {
        setWeatherData({
            loaded: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            coords: response.data.coord,
            units: "metric",
            iconForecast: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }
    function search() {
        let apiKey = "c8e5c863fd58a7ff2509f0046e2f8c3e";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
        axios.get(apiUrl).then(showTemperature);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function loadCity(event) {
        setCity(event.target.value);
    }
    if(weatherData.loaded){
    return( 
    <div className="Weather">
        <div className="card principal mx-auto d-block">
            <div className="form">
                <form onSubmit={handleSubmit}> 
                    <div className="row">
                        <div className="col-7">
                            <input type="search" className="form-control" placeholder="Enter a city..." onChange={loadCity} autoFocus="on"></input>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="search">Search</button>
                        </div>
                    </div>
                </form>
            </div>
                
            <Info data={weatherData}/>
            <Forecast coords={weatherData.coords} units="metric"/>

            
         </div>
    </div>
    );
    } else {
    search();
    return(    
    <div className="loader">   
    <Loader 
    type="ThreeDots"
    color="#61DAFB"
    height={100}
    width={100}
    timeout={3000} //3 secs
  />
  </div>
  );
    }
}