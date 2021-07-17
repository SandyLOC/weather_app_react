import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";
import Units from "./Units.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css"



export default function Info(props) {
    return (
    <div className="row">
                        <div className="col-7 information">
                            <div className="result">
                                <h1 className="city d-flex" id="city">{props.data.city}</h1>
                                <h2 className="day d-flex"><FormatDate date={props.data.date}/></h2>
                            </div>
                            <div className="card" id="dataCard">
                                <div className="info-decription d-flex">
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
                            </div>
                                    <div className="float-left">
                                    <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                                    </div>
                                

                        </div>
                    </div>
    );
}