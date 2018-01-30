import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem } from 'react-bootstrap';
import DashboardRun from './Dashboard.run';
import LogWidget from '../Widget/LogWidget/LogWidget'
import Weather from '../Widget/WeatherWidget/WeatherWidget'
import config from '../../config/config'
import WeatherWidget from '../Widget/WeatherWidget/WeatherWidget';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speciesAmount: '...',
            animalsAmount: '...',
            servicesAmount: '...',
            weatherForecast: {}
        }
    }

    howManySpeciesInFirebase() {

        let userData = JSON.parse(localStorage.getItem('user'))
        let collection = (userData.zooName + '-species')

        var self = this;

        let newSpeciesAmount = []
        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
        
                newSpeciesAmount.push(doc.data())
            });

            console.log("Nombre de d espèces : " + newSpeciesAmount.length)

            self.setState({
                speciesAmount: newSpeciesAmount.length
            })

        });

    }

    

    howManyServicesInFirebase() {

        let userData = JSON.parse(localStorage.getItem('user'))
        let collection = (userData.zooName + '-services')

        var self = this;

        let newServicesAmount = []
        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
            
                newServicesAmount.push(doc.data())
            });

            console.log("Nombre de services: " + newServicesAmount.length)

            self.setState({
                servicesAmount: newServicesAmount.length
            })

        });

    }

    howManyAnimalsInFirebase() {

        let userData = JSON.parse(localStorage.getItem('user'))
        let collection = (userData.zooName + '-animals')

        var self = this;

        let newAnimalsAmount = []
        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
            
                newAnimalsAmount.push(doc.data())
            });

            console.log("Nombre d'animaux: " + newAnimalsAmount.length)

            self.setState({
                animalsAmount: newAnimalsAmount.length
            })

        });

    }
    
    getUserData() {
        let userData = JSON.parse(localStorage.getItem('user'))
        console.log('initialisation de l api', userData.zooName)
        this.setState({
            zooName: userData.zooName
        })
    }

    componentDidMount() {
      
    }

    componentWillUnmount() {
        $(this.refs.chartSpline).data('plot').shutdown();
    }


    componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartSpline)
        );
        this.getUserData()
        this.howManySpeciesInFirebase()
        this.howManyAnimalsInFirebase()
        this.howManyServicesInFirebase()

    }

    render() {
        console.log(this.state.weatherForecast)
        return (
            <ContentWrapper>
                <div className="content-heading">
                    { /* START Language list */}

                    { /* END Language list */} Ecran de contrôle
                    <small data-localize="dashboard.WELCOME">Bienvenue dans Akongo Zoo Manager</small>
                </div>
                { /* START widgets box */}
                <Row>
                    <Col lg={3} sm={6}>
                        { /* START widget */}
                        <div className="panel widget bg-primary">
                            <Row className="row-table">
                                <Col xs={4} className="text-center bg-primary-dark pv-lg">
                                    <em className="icon-book-open fa-3x"></em>
                                </Col>
                                <Col xs={8} className="pv-lg">
                                    <div className="h2 mt0">{this.state.speciesAmount}</div>
                                    <div className="text-uppercase">Espèces</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        { /* START widget */}
                        <div className="panel widget bg-purple">
                            <Row className="row-table">
                                <Col xs={4} className="text-center bg-purple-dark pv-lg">
                                    <em className="fa fa-linux fa-3x"></em>
                                </Col>
                                <Col xs={8} className="pv-lg">
                                    <div className="h2 mt0">{this.state.animalsAmount}
                                    </div>
                                    <div className="text-uppercase">Animaux</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        { /* START widget */}
                        <div className="panel widget bg-green">
                            <Row className="row-table">
                                <Col xs={4} className="text-center bg-green-dark pv-lg">
                                    <em className="fa fa-cutlery fa-3x"></em>
                                </Col>
                                <Col xs={8} className="pv-lg">
                                    <div className="h2 mt0">{this.state.servicesAmount}</div>
                                    <div className="text-uppercase">Services</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        { /* START date widget */}
                        <div className="panel widget">
                            <Row className="row-table">
                                <Col xs={4} className="text-center bg-green pv-lg">
                                    { /* See formats: https://docs.angularjs.org/api/ng/filter/date */}
                                    <div data-now="" data-format="MMMM" className="text-sm"></div>
                                    <br />
                                    <div data-now="" data-format="D" className="h2 mt0"></div>
                                </Col>
                                <Col xs={8} className="pv-lg">
                                    <div data-now="" data-format="dddd" className="text-uppercase"></div>
                                    <br />
                                    <div data-now="" data-format="h:mm" className="h2 mt0"></div>
                                    <div data-now="" data-format="a" className="text-muted text-sm"></div>
                                </Col>
                            </Row>
                        </div>
                        { /* END date widget */}
                    </Col>
                </Row>
                { /* END widgets box */}
                <Row>
                    { /* START dashboard main content */}
                    <Col lg={9}>
                        { /* START chart */}
                        <Row>
                            <Col lg={12}>
                                { /* START widget */}
                                <div id="panelChart9" className="panel panel-default">
                                    <div className="panel-heading">
                                        <a href="#" data-tool="panel-refresh" data-toggle="tooltip" title="Refresh Panel" className="pull-right">
                                            <em className="fa fa-refresh"></em>
                                        </a>
                                        <div className="panel-title">Inbound visitor statistics</div>
                                    </div>
                                    <div className="panel-body">
                                        <div ref="chartSpline" className="chart-spline flot-chart"></div>
                                    </div>
                                </div>
                                { /* END widget */}
                            </Col>
                        </Row>
                        { /* END chart */}
                        <WeatherWidget />
                        <Row>
                            <Col lg={4}>
                                { /* START widget */}
                                <div className="panel widget">
                                    <div className="panel-body">
                                        <div className="clearfix">
                                            <h3 className="pull-left text-muted mt0">300</h3>
                                            <em className="pull-right text-muted fa fa-coffee fa-2x"></em>
                                        </div>
                                        <div data-sparkline="" data-type="line" data-height="80" data-width="100%" data-line-width="2" data-line-color="#7266ba" data-spot-color="#888" data-min-spot-color="#7266ba"
                                            data-max-spot-color="#7266ba" data-fill-color="" data-highlight-line-color="#fff" data-spot-radius="3" data-values="1,3,4,7,5,9,4,4,7,5,9,6,4"
                                            data-resize="true" className="pv-lg"></div>
                                        <p>
                                            <small className="text-muted">Actual progress</small>
                                        </p>
                                        <div className="progress progress-xs">
                                            <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }} className="progress-bar progress-bar-info progress-bar-striped">
                                                <span className="sr-only">80% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { /* END widget */}
                            </Col>
                            <Col lg={8}>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <div className="pull-right label label-danger">5</div>
                                        <div className="pull-right label label-success">12</div>
                                        <div className="panel-title">Team messages</div>
                                    </div>
                                    { /* START list group */}
                                    <div data-height="180" data-scrollable="" className="list-group">
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/02.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">2h</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-success circle-lg text-left"></span>Catherine Ellis</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/03.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">3h</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-success circle-lg text-left"></span>Jessica Silva</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla facilisi.</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/09.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">4h</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-danger circle-lg text-left"></span>Jessie Wells</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/12.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">1d</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-danger circle-lg text-left"></span>Rosa Burke</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                        { /* START list group item */}
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/10.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">2d</small>
                                                    <strong className="media-box-heading text-primary">
                                                        <span className="circle circle-danger circle-lg text-left"></span>Michelle Lane</strong>
                                                    <p className="mb-sm">
                                                        <small>Mauris eleifend, libero nec cursus lacinia...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */}
                                    </div>
                                    { /* END list group */}
                                    { /* START panel footer */}
                                    <div className="panel-footer clearfix">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search message .." className="form-control input-sm" />
                                            <span className="input-group-btn">
                                                <button type="submit" className="btn btn-default btn-sm"><i className="fa fa-search"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    { /* END panel-footer */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    { /* END dashboard main content */}
                    { /* START dashboard sidebar */}
                    <Col lg={3}>
                       
                        { /* START messages and activity */}
                            <LogWidget />
                        { /* END messages and activity */}
                    </Col>
                    { /* END dashboard sidebar */}
                </Row>
            </ContentWrapper>
        );

    }

}

export default Dashboard;
