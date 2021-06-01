import React from "react";
import FormatDate from "./FormatDate.js";
//import WeatherIcon from "./WeatherIcon.js";
import Units from "./Units.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css"
//<WeatherIcon code={props.data.icon} alt={props.data.description}/>


export default function Info(props) {
    return (
    <div className="row">
                        <div className="col-sm-6">
                            <div className="result">
                                <h1 className="city" id="city">{props.data.city}</h1>
                                <h2 className="day"><FormatDate date={props.data.date}/></h2>
                            </div>
                            <div className="card" id="dataCard">
                                <div className="card-body">
                                    <ul id="data">
                                        <li><span className="text-capitalize description">{props.data.description}</span></li>
                                        <li>Wind: <span className="wind">{props.data.wind} Km/h</span></li>
                                        <li>Humidity: <span className="humid">{props.data.humidity}</span>%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="clearfix">
                            <Units temperature={props.data.temperature}/>

                                    <div className="float-left">

                                    </div>
                                
                            </div>
                        </div>
                    </div>
    );
}