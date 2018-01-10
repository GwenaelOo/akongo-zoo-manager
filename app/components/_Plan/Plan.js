import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Tabs, Tab } from 'react-bootstrap';
import DropzoneProfilePicture from '../Photosupload/DropzoneProfilePicture';
let config = require("../../config/config");
let api = require("../Scripts/database_api.js");


class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planUrl: ''
        };
    }
   
    componentWillMount() {
      
    }
    render() {
        console.log(this.state.ServicesList)
        return (
            <ContentWrapper>
                <h3>Mon Plan</h3>
                {/* START row */}
                <div className="row">
                    Mon plan
                </div>
                
                <div>
                    
                </div>
                {/* END panel tab */}
            </ContentWrapper>
        );
    }

}

export default Plan;
