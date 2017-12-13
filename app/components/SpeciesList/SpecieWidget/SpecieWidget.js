import React from 'react';


import { Tabs, Tab } from 'react-bootstrap'

class SpecieWidget extends React.Component {

    render() {

        
        return (
<div className="col-lg-4">
    {/* START widget */}
    <div className="panel widget">
        <div style={{ backgroundImage: `url(${this.props.specieData.specieProfilPicture})` }} className="panel-body text-center bg-center">
            <div className="row row-table">
                <div className="col-xs-12 text-white">
                    <div className="BackgroundHandler">
                    </div>
                    <h2 className="m0">{this.props.specieData.specieName}</h2>
                    <p className="m0">
                        <em className="fa fa-twitter fa-fw"></em>@chris</p>
                </div>
            </div>
        </div>
        <div className="panel-body text-center bg-gray-darker">
            <div className="row row-table">

                <div className="col-xs-4">
                    <a href="#" className="text-white">
                        <em className="fa fa-plus fa-2x"></em>
                        <br />

                    </a>
                </div>

                <div className="col-xs-4">
                    <a href="#" className="text-white">
                        <em className="fa fa-eye fa-2x"></em>
                        <br />

                    </a>
                </div>
                <div className="col-xs-4">
                    <a href="#" className="text-white">
                        <em className="fa fa-pencil-square-o fa-2x"></em>
                        <br />
                    </a>

                </div>
            </div>
        </div>
    </div>
</div>    

        );
    }

}

export default SpecieWidget;