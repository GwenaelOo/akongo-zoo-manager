import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap'

class AnimalWidget extends React.Component {


    handleEditClic(animalId) {

        // Doit être modifier pour fonctioner avec redux
    }
    render() {

        return (
            <div className="col-lg-4">
                {/* START widget */}
                <div className="panel widget">
                    <div style={{ backgroundImage: `url(${this.props.animalData.animalPhotoProfil})` }} className="panel-body text-center bg-center">
                        <div className="row row-table">
                            <div className="col-xs-12 text-white">
                                <div className="BackgroundHandler">
                                </div>
                                <h2 className="m0">{this.props.animalData.animalName}</h2>
                                <p className="m0">
                                    <em className="fa fa-twitter fa-fw"></em>@chris</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body text-center bg-gray-darker">
                        <div className="row row-table">
                            <div className="col-xs-12" >
                                <Link to={{
                                    pathname: "animalView",
                                    state: { view: 'edit', animalId: this.props.animalData.animalId }
                                }}>
                                    <em className="fa fa-pencil-square-o fa-2x"></em>
                                </Link>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default AnimalWidget;