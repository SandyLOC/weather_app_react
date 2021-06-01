import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
//import Info from "./Info.js";
//import Forecast from "./Forecast.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css"

//<Info data={weatherData}/>
//<Forecast coords={weatherData.coords} units="metric"/>
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
        let apiKey = "003e98e024261fa599a610337f728a99";
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
        <div className="card principal">
            <div className="form">
                <form onSubmit={handleSubmit}> 
                    <div className="row">
                        <div className="col-sm-7">
                            <input type="search" className="form-control" placeholder="Enter a city..." onChange={loadCity} autoFocus="on"></input>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="search">Search</button>
                        </div>
                    </div>
                </form>
            </div>
                

                
            
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