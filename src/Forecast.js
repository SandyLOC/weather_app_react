import React, {useState, useEffect} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";


export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
     }, [props.coords]);

    function displayForecast(response) {  
        setForecast(response.data.daily);
        setLoaded(true);
    }
    let apiKey = "003e98e024261fa599a610337f728a99";
    let latit = props.coords.lat;
    let longit = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latit}&lon=${longit}&exclude=hourly,minutely&units=${props.units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayForecast);

    if(loaded) {
        return (
            <div className="card forecast" id="forecast days">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                        return(
                        <div className="col" key={index}>
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
        return ("Loading...");
    }
}
