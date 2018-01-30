import React from 'react';
import { Grid, Row, Col, Dropdown, MenuItem } from 'react-bootstrap';
import config from '../../../config/config'

class WeatherWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        };

    }

    getWeatherForecast() {

        let userData = JSON.parse(localStorage.getItem('user'))
        console.log(userData)

        let baseUrlWeather = "http://api.openweathermap.org/data/2.5/weather?q="
        let baseUrlForecast = "http://api.openweathermap.org/data/2.5/forecast?q="
        let city = userData.city
        let country = "fr"
        let appid = config.openWeatherApi

        var self = this;

        $.getJSON(baseUrlWeather + city + ',' + country + '&appid=' + appid.openWeatherApiKey + '&units=metric&lang=fr')
        .success(function (data) {
            self.setState({
                weather: data
            });
        }).then(function () {
           
        });

        $.getJSON(baseUrlForecast + city + ',' + country + '&appid=' + appid.openWeatherApiKey + '&units=metric&lang=fr')
            .success(function (data) {
                self.setState({
                    weatherForecast: data
                });
            }).then(function () {

            });


       

    }
  
    componentWillMount() {
        this.getWeatherForecast();
    }

    render() {
        console.log(this.state.weatherForecast)
        
    

        let widget
        if (this.state.weather.main) {
            widget = (
                <Col lg={12}>
                    <div className="panel widget">
                        <Row className="row-table">
                            <Col md={2} sm={3} xs={6} className="text-center bg-info pv-xl">
                                <em className="wi wi-day-sunny fa-4x"></em>
                                <em className="text-uppercase">{this.state.weather.name}</em>
                            </Col>
                            <Col md={2} sm={3} xs={6} className="pv br">
                                <div className="h1 m0 text-bold">{this.state.weather.main.temp}&deg;</div>
                                <div className="text-uppercase">{this.state.weather.weather["0"].description}</div>
                            </Col>
                            <Col md={2} sm={3} className="hidden-xs pv text-center br">
                                <div className="text-info text-sm">{this.state.weatherForecast.list["1"].dt_txt.slice(11,-3)}</div>
                                <div className="text-muted text-md">
                                    <em className="wi wi-day-cloudy"></em>
                                    
                                </div>
                                <div className="text-info">
                                    <em className="wi wi-sprinkles"></em>
                                    <span className="text-muted">{this.state.weatherForecast.list["1"].weather["0"].description}</span>
                                </div>
                                <div className="text-muted">{this.state.weatherForecast.list["2"].main.temp}&deg;</div>
                            </Col>
                            <Col md={2} sm={3} className="hidden-xs pv text-center br">
                                <div className="text-info text-sm">{this.state.weatherForecast.list["2"].dt_txt.slice(11, -3)}</div>
                                <div className="text-muted text-md">
                                    <em className="wi wi-day-cloudy"></em>
                                </div>
                                <div className="text-info">
                                    <em className="wi wi-sprinkles"></em>
                                    <span className="text-muted">{this.state.weatherForecast.list["2"].weather["0"].description}</span>
                                </div>
                                <div className="text-muted">{this.state.weatherForecast.list["2"].main.temp}&deg;</div>
                            </Col>
                            <Col md={2} className="hidden-sm hidden-xs pv text-center br">
                                <div className="text-info text-sm">{this.state.weatherForecast.list["3"].dt_txt.slice(11, -3)}</div>
                                <div className="text-muted text-md">
                                    <em className="wi wi-day-cloudy"></em>
                                </div>
                                <div className="text-info">
                                    <em className="wi wi-sprinkles"></em>
                                    <span className="text-muted">{this.state.weatherForecast.list["3"].weather["0"].description}</span>
                                </div>
                                <div className="text-muted">{this.state.weatherForecast.list["3"].main.temp}&deg;</div>
                            </Col>
                            <Col md={2} className="hidden-sm hidden-xs pv text-center">
                                <div className="text-info text-sm">{this.state.weatherForecast.list["4"].dt_txt.slice(11, -3)}</div>
                                <div className="text-muted text-md">
                                    <em className="wi wi-day-sunny-overcast"></em>
                                </div>
                                <div className="text-info">
                                    <em className="wi wi-sprinkles"></em>
                                    <span className="text-muted">{this.state.weatherForecast.list["4"].weather["0"].description}</span>
                                </div>
                                <div className="text-muted">{this.state.weatherForecast.list["4"].main.temp}&deg;</div>
                            </Col>
                        </Row>
                    </div>
                </Col>)
        } else {
            widget = null
        }
    

        return (
          <Row>
              {widget}
        </Row>
        );
    }

}

export default WeatherWidget;

