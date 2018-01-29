import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// Ajout des composants du formulaire

import DropzoneProfilePicture from '../Photosupload/DropzoneProfilePicture';
import UploadPhoto from '../Upload/UploadPhoto/UploadPhoto';

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
            animationPhotoProfilId: '',
            animationPhoto1: '',
            animationPhoto2: '',
            animationPhoto3: '',
            animationPhoto4: '',
            logId: 0,
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

    handleReturnedUrl(returnedUrl, photoId, returnedId) {

        let photoName = ('animation' + photoId)
        let photoNameId = ('animation' + photoId + 'Id')

        this.setState({
            [photoName]: returnedUrl,
            [photoNameId]: returnedId
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
            animationPhotoProfilId: this.state.animationPhotoProfilId,
            animationPhoto1: this.state.animationPhoto1,
            animationPhoto2: this.state.animationPhoto2,
            animationPhoto3: this.state.animationPhoto3,
            animationPhoto4: this.state.animationPhoto4,
            log: this.state.logId + 1
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


        let userData = JSON.parse(localStorage.getItem('user'))
        var self = this
        // Fonction magique que je ne comprend pas 

        let docRef = firebase.firestore()
            .collection(userData.zooName + '-animations')
            .doc(animationId);

        docRef.get().then(function (snapshot) {
            // The Promise was "fulfilled" (it succeeded).
            let data = snapshot.data()

            console.log('données récupérée')
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

    getLogLenght() {
        let userData = JSON.parse(localStorage.getItem('user'))
        var self = this
        let collection = (userData.zooName + '-log')
        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            let logLenght = []
            querySnapshot.forEach(function (doc) {
                logLenght.push(doc.data())
            });

            let logId = logLenght.length;
            console.log(logId)
            self.setState({
                logId: logId
            });

        })
    }


    handleDelete() {

        let animationData = {
            animationId: this.state.animationId,
            animationName: this.state.animationName,
            log: this.state.logId + 1
        } 
        
        swal({
            title: "Êtes-vous sûr ?",
            text: "La suppression est irréversible, vous ne serez plus en mesure de récupérer ces données!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Oui, supprimez tout!",
            closeOnConfirm: false
        },
            function () {
                api.deleteAnimationFromDatabase(animationData)
            });   
    }


    componentWillMount() {
        this.getLogLenght()

        if (this.props.location.state.animationId !== null) {
            console.log('recuperation du animationId', this.props.location.state.animationId)
            this.readAnimationFromDatabase(this.props.location.state.animationId)
           
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

        const deleteButton = (
            <Button bsClass="btn btn-labeled btn-danger mr" onClick={() => { this.handleDelete() }}>
                <span className="btn-label"><i className="fa fa-trash-o"></i></span> Supprimer l'animation
            </Button>
        );

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
                                        <UploadPhoto animationName={this.state.animationName} background={this.state.animationPhotoProfil} id="PhotoProfil" methodToReturnUrl={this.handleReturnedUrl} />
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

                <Panel style={{ "display": "flex" }}>
                    <Button bsClass="btn btn-labeled btn-success mr" bsSize="large" onClick={() => { this.handleClick() }}>
                        <span className="btn-label"><i className="fa fa-check"></i></span> Valider l'animation
                    </Button>

                    {this.state.EditMode ? deleteButton : null}
                </Panel>
            </ContentWrapper>
        );
    }

}

export default AnimationView;
