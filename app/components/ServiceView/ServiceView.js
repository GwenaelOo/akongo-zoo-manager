import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// Ajout des composants du formulaire

import DropzoneProfilePicture from '../Photosupload/DropzoneProfilePicture';
import TimePicker from 'material-ui/TimePicker';

let api = require("../Scripts/database_api.js");

class ServiceView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceCategoryId: '',
            serviceCategory: '',
            serviceId: '',
            serviceName: '',
            serviceDescription: '',
            serviceOpeningTime: '',
            serviceClosingTime: '',
            servicePhotoProfil: '',
            servicePhoto1: '',
            servicePhoto2: '',
            servicePhoto3: '',
            servicePhoto4: '',
            EditMode: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOpeningChange = this.handleOpeningChange.bind(this);
        this.handleClosingChange = this.handleClosingChange.bind(this);
        this.handleReturnedUrl = this.handleReturnedUrl.bind(this);
    }

    handleChange(event) {

        let name = event.target.name
        this.setState({ [name]: event.target.value });

        let serviceData = {
            serviceCategoryId: this.state.serviceCategoryId,
            serviceCategory: this.state.serviceCategory,
            serviceId: this.state.serviceId,
            serviceName: this.state.serviceName,
            serviceOpeningTime: this.state.serviceOpeningTime,
            serviceClosingTime: this.state.serviceClosingTime,
            serviceDescription: this.state.serviceDescription,
            servicePhotoProfil: this.state.servicePhotoProfil,
            servicePhoto1: this.state.servicePhoto1,
            servicePhoto2: this.state.servicePhoto2,
            servicePhoto3: this.state.servicePhoto3,
            servicePhoto4: this.state.servicePhoto4,
        }

        console.log(serviceData)
    }

    handleReturnedUrl(returnedUrl, photoId) {
        let photoName = ('service' + photoId)
        this.setState({
            [photoName]: returnedUrl
        });
    }

    handleOpeningChange(key, data){
        console.log(data)
        this.setState({
            serviceOpeningTime: data
        });  
    }

    handleClosingChange(key, data) {
        this.setState({
           serviceClosingTime: data
        });
    }

    handleClick() {

        let serviceData = {
            serviceCategoryId: this.state.serviceCategoryId,
            serviceCategory: this.state.serviceCategory,
            serviceId: this.state.serviceId,
            serviceName: this.state.serviceName,
            serviceDescription: this.state.serviceDescription,
            servicePhotoProfil: this.state.servicePhotoProfil,
            serviceOpeningTime: this.state.serviceOpeningTime,
            serviceClosingTime: this.state.serviceClosingTime,
            servicePhoto1: this.state.servicePhoto1,
            servicePhoto2: this.state.servicePhoto2,
            servicePhoto3: this.state.servicePhoto3,
            servicePhoto4: this.state.servicePhoto4,
        }

        console.log('serviceId à la création', this.state.serviceCategoryId)

        if (this.state.EditMode === true) {
            console.log('j edite')
            api.editNewServiceToDatabase(serviceData);
            
        }
        else {
            console.log('je cree')
            api.addNewServiceToDatabase(serviceData);
        }


    }

    readServiceFromDatabase(serviceId) {

        let userData = JSON.parse(localStorage.getItem('user'))
        var self = this
        // Fonction magique que je ne comprend pas 

        let docRef = firebase.firestore()
            .collection(userData.zooName + '-services')
            .doc(serviceId);

        docRef.get().then(function (snapshot) {
            // The Promise was "fulfilled" (it succeeded).
            let data = snapshot.data()

            self.setState({
                serviceId: data.serviceId,
                serviceName: data.serviceName,
                serviceDescription: data.serviceDescription,
                servicePhotoProfil: data.servicePhotoProfil,
                servicePhoto1: data.servicePhoto1,
                servicePhoto2: data.servicePhoto2,
                servicePhoto3: data.servicePhoto3,
                servicePhoto4: data.servicePhoto4,
                EditMode: true,
            });
        }, function (error) {
            // The Promise was rejected.
            console.error(error);
        });
    }

    getSpecieNameFromSpecieId(specieId) {
        // A développer
    }


    componentWillMount() {
        if (this.props.location.state.serviceId !== null) {
            console.log('recuperation du serviceId', this.props.location.state.serviceId)
            this.readServiceFromDatabase(this.props.location.state.serviceId);
        } else {
            console.log('Pas de données, nouveau service')
        }
    }

    render() {

        const innerIcon = <em className="fa fa-check"></em>;
        const innerButton = <Button>Before</Button>;
        const innerDropdown = (
            <DropdownButton title="Action" id="input-dropdown-addon">
                <MenuItem key="1">Item</MenuItem>
            </DropdownButton>
        );
        const innerRadio = <input type="radio" aria-label="..." />;
        const innerCheckbox = <input type="checkbox" aria-label="..." />;

        return (
            <ContentWrapper>
                <h3>Form Elements
                               <small>Standard and custom elements for any form</small>
                </h3>

                <Panel header="Form elements">
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend> Informations générales</legend>
                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Nom du service</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="serviceName" placeholder={this.state.serviceName} value={this.state.serviceName} onChange={this.handleChange} className="form-control" />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Catégorie du service</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="serviceCategory" placeholder="Ex. Gorilles" value={this.state.serviceCategory} onChange={this.handleChange} className="form-control" />
                                    </Col>
                                </FormGroup>
                            </fieldset>
                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Ouverture</label>
                                    <Col sm={4}>
                                        <TimePicker
                                            name="serviceOpeningTime"
                                            format="24hr"
                                            hintText="Heure d'ouverture"
                                            onChange={this.handleOpeningChange}
                                            value={this.serviceOpeningTime}
                                        />
                                  
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Fermeture</label>
                                    <Col sm={4}>
                                        <TimePicker
                                            name="serviceClosingTime"
                                            format="24hr"
                                            hintText="Heure de fermeture"
                                            onChange={this.handleClosingChange}
                                            
                                        />
                                    </Col>
                                </FormGroup>
                            </fieldset>

                        </fieldset>

                        <fieldset>
                            <legend> Ajout des photos</legend>
                            <FormGroup>
                                <div className="row" >
                                    <div className="col-md-1" >
                                    </div>

                                    <div className="col-md-4" >
                                        <DropzoneProfilePicture serviceName={this.state.serviceName} background={this.state.servicePhotoProfil} id="PhotoProfil" methodToReturnUrl={this.handleReturnedUrl} />
                                    </div>

                                    <div className="col-md-1" >
                                    </div>

                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture serviceName={this.state.serviceName} background={this.state.servicePhoto1} id="Photo1" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture serviceName={this.state.serviceName} background={this.state.servicePhoto2} id="Photo2" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture serviceName={this.state.serviceName} background={this.state.servicePhoto3} id="Photo3" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture serviceName={this.state.serviceName} background={this.state.servicePhoto4} id="Photo4" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </FormGroup>
                        </fieldset>
                    </form>
                </Panel>

                <Panel>
                    <Button type="submit" bsStyle="default" onClick={() => { this.handleClick() }}>Valider la fiche service</Button>
                </Panel>
            </ContentWrapper>
        );
    }

}

export default ServiceView;
