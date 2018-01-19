import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Tabs, Tab, Panel, Button } from 'react-bootstrap';
import DropzoneProfilePicture from '../Photosupload/DropzoneProfilePicture';
import UploadMap from '../Upload/UploadMap/UploadMap'
let config = require("../../config/config");
let api = require("../Scripts/database_api.js");



class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapUrl: ''
        };
    }
   
    handleReturnedUrl(returnedUrl) {

        console.log('url recupéré ' + returnedUrl)

        this.setState({
            mapURL: returnedUrl
        });

    }

    render() {
        console.log(this.state.ServicesList)
        return (
            <ContentWrapper>
                
                {/* START row */}
                <Panel>
                    
                        <legend>Mon Plan</legend>
                    
                <div>
                    <UploadMap animationName={this.state.mapName} background={this.state.mapPreview} id="map" methodToReturnUrl={this.handleReturnedUrl} />
                </div>
                
                <div>
                    
                </div>
                </Panel>
                {/* END panel tab */}
                <Panel>
                    <Button type="submit" bsStyle="default" onClick={() => { this.handleClick() }}>Valider la fiche animation</Button>
                </Panel>
            </ContentWrapper>
        );
    }

}

export default Plan;
