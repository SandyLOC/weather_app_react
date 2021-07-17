import React, {useState, useEffect} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";
import Loader from "react-loader-spinner";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    let apiKey = "c8e5c863fd58a7ff2509f0046e2f8c3e";
    let latit = props.coords.lat;
    let longit = props.coords.lon;

    function displayForecast(response) {  
        setForecast(response.data.daily);
        setLoaded(true);
    }

    useEffect(() => {
        setLoaded(false);
     }, [props.coords]);

    if(loaded) {
        return (
            <div className="card forecast" id="forecast days">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                        return(
                        <div className="col forecast-column" key={index}>
                            <ForecastDay data={dailyForecast} />
                        </div>
                        );
                    } else {
                        return null;
                    }
                    })}    
                 </div>
            </div>
        );
    } else {
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latit}&lon=${longit}&exclude=hourly,minutely&units=${props.units}`;
        axios.get(`${apiUrl}&appid=${apiKey}`).then(displayForecast);
        return (
            <div className="loader">   
            <Loader 
            type="ThreeDots"
            color="#61DAFB"
            height={100}
            width={100}
            timeout={3000} //5 secs
          />
          </div>
        );
    }
}
