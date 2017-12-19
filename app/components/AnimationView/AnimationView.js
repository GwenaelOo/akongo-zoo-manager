import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// Ajout des composants du formulaire

import DropzoneProfilePicture from '../Photosupload/DropzoneProfilePicture';

let api = require("../Scripts/database_api.js");

class AnimationView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationCategoryId: '',
            animationCategory: '',
            animationId: '',
            animationName: '',
            animationDescription: '',
            animationPhotoProfil: '',
            animationPhoto1: '',
            animationPhoto2: '',
            animationPhoto3: '',
            animationPhoto4: '',
            EditMode: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleReturnedUrl = this.handleReturnedUrl.bind(this);
    }

    handleChange(event) {

        let name = event.target.name
        this.setState({ [name]: event.target.value });

        let animationData = {
            animationCategoryId: this.state.animationCategoryId,
            animationCategory: this.state.animationCategory,
            animationId: this.state.animationId,
            animationName: this.state.animationName,
            animationDescription: this.state.animationDescription,
            animationPhotoProfil: this.state.animationPhotoProfil,
            animationPhoto1: this.state.animationPhoto1,
            animationPhoto2: this.state.animationPhoto2,
            animationPhoto3: this.state.animationPhoto3,
            animationPhoto4: this.state.animationPhoto4,
        }

        console.log(animationData)
    }

    handleReturnedUrl(returnedUrl, photoId) {

        let photoName = ('animation' + photoId)
        this.setState({
            [photoName]: returnedUrl
        });
    }

    handleClick() {

        let animationData = {
            animationCategoryId: this.state.animationCategoryId,
            animationCategory: this.state.animationCategory,
            animationId: this.state.animationId,
            animationName: this.state.animationName,
            animationDescription: this.state.animationDescription,
            animationPhotoProfil: this.state.animationPhotoProfil,
            animationPhoto1: this.state.animationPhoto1,
            animationPhoto2: this.state.animationPhoto2,
            animationPhoto3: this.state.animationPhoto3,
            animationPhoto4: this.state.animationPhoto4,
        }

        console.log('animationId à la création', this.state.animationCategoryId)

        if (this.state.EditMode === true) {
            api.editNewAnimationToDatabase(animationData);
        }
        else {
            api.addNewAnimationToDatabase(animationData);
        }


    }

    readAnimationFromDatabase(animationId) {
        // Fonction magique que je ne comprend pas 
        var self = this;
        // Selection de la référence de la base de donnée
        var ref = firebase.database().ref('zooTest/species/' + this.state.animationCategoryId + this.state.animationId);
        // Type de requete
        ref.once('value').then(function (snapshot) {
            // The Promise was "fulfilled" (it succeeded).
            let data = snapshot.val()
            console.log(data);
            self.setState({
                animationId: data.animationId,
                animationName: data.animationName,
                animationDescription: data.animationDescription,
                animationPhotoProfil: data.animationPhotoProfil,
                animationPhoto1: data.animationPhoto1,
                animationPhoto2: data.animationPhoto2,
                animationPhoto3: data.animationPhoto3,
                animationPhoto4: data.animationPhoto4,
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
        if (this.props.location.state.animationId !== null) {
            console.log('recuperation du animationId', this.props.location.state.animationId)
            this.setState({
                animationCategoryId: this.props.location.state.animationId
            })
        } else {
            console.log('Pas de données, nouveau animation')
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
                                    <label className="col-sm-2 control-label">Nom du animation</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="animationName" placeholder={this.state.animationName} value={this.state.animationName} onChange={this.handleChange} className="form-control" />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Espèce</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="animationCategory" placeholder="Ex. Gorilles" value={this.state.animationCategory} onChange={this.handleChange} className="form-control" />
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
                                        <DropzoneProfilePicture animationName={this.state.animationName} background={this.state.animationPhotoProfil} id="PhotoProfil" methodToReturnUrl={this.handleReturnedUrl} />
                                    </div>

                                    <div className="col-md-1" >
                                    </div>

                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture animationName={this.state.animationName} background={this.state.animationPhoto1} id="Photo1" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture animationName={this.state.animationName} background={this.state.animationPhoto2} id="Photo2" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture animationName={this.state.animationName} background={this.state.animationPhoto3} id="Photo3" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture animationName={this.state.animationName} background={this.state.animationPhoto4} id="Photo4" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </FormGroup>
                        </fieldset>
                    </form>
                </Panel>

                <Panel>
                    <Button type="submit" bsStyle="default" onClick={() => { this.handleClick() }}>Valider la fiche animation</Button>
                </Panel>
            </ContentWrapper>
        );
    }

}

export default AnimationView;
