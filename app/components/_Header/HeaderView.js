import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// Ajout des composants du formulaire
import TextInput from '../CustomComponents/TextInput'
import DropzoneProfilePicture from '../Photosupload/DropzoneProfilePicture';

let api = require("../Scripts/database_api.js");

class HeaderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           headerImage: '',
           headerIsActive: 'false',
           headerText: '',
           headerModalImage: '',
           headerModalDescription: '',
           headerModalLink: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleReturnedUrl = this.handleReturnedUrl.bind(this);
    }

    handleDelete() {

        let animalData = {
            animalId: this.state.animalId,
            animalName: this.state.animalName,
            log: this.state.logId
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
                api.deleteHeaderFromDatabase(AnimalData)
            });
    }

    handleChange(event) {

        let name = event.target.name
        this.setState({ [name]: event.target.value });

        let headerData = {
            headerId: this.state.headerId,
            headerName: this.state.headerName,
        }

        console.log(headerData)
    }

    handleReturnedUrl(returnedUrl, photoId) {

        let photoName = ('header' + photoId)
        this.setState({
            [photoName]: returnedUrl
        });
    }

    handleClick() {
        let headerData = {
            headerId: this.state.headerId,
            headerName: this.state.headerName,
        }

        console.log('headerId à la création', this.state.headerId)

        if (this.state.EditMode === true) {
            console.log('je edite')
            api.editHeaderToDatabase(headerData);
        }
        else {
            console.log('je crée')
            api.addNewHeaderToDatabase(headerData);
        }
    }

    componentWillMount() {
      
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
                <span className="btn-label"><i className="fa fa-trash-o"></i></span> Supprimer le bandeau
            </Button>
        );

        return (
            <ContentWrapper>
                <h3>Ajouter/Modifier uun bandeau
                </h3>

                <Panel>
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend> Informations générales</legend>
                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Nom du Header</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="headerName" placeholder={this.state.headerName} value={this.state.headerName} onChange={this.handleChange} className="form-control" />
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </fieldset>
                        <fieldset>
                            <div className="col-md-6">
                                <label htmlFor="userName">Description du header</label>
                                <Panel>
                                    <textarea name="headerDescription" rows="5" className="form-control note-editor" value={this.state.headerDescription} onChange={this.handleChange}>
                                    </textarea>
                                </Panel>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="userName">Selection de la bannière</label>   
                                <DropzoneProfilePicture headerName={this.state.headerName} background={this.state.headerPhotoProfil} id="PhotoProfil" methodToReturnUrl={this.handleReturnedUrl} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="userName">Description du header</label>
                                <Panel>
                                    <textarea name="headerDescription" rows="5" className="form-control note-editor" value={this.state.headerDescription} onChange={this.handleChange}>
                                    </textarea>
                                </Panel>
                            </div>

                            <legend> Ajout des photos</legend>

                            <div className="col-md-6">
                              
                                    <label htmlFor="userName">Description du header</label>
                                    <Panel>
                                        <textarea name="headerDescription" rows="5" className="form-control note-editor" value={this.state.headerDescription} onChange={this.handleChange}>
                                        </textarea>
                                    </Panel>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="userName">Description du header</label>
                                    <Panel>
                                        <textarea name="headerDescription" rows="5" className="form-control note-editor" value={this.state.headerDescription} onChange={this.handleChange}>
                                        </textarea>
                                    </Panel>
                                </div>
                        </fieldset>

                        <fieldset>
                          
                            <FormGroup>
                                <div className="row" >
                                    <div className="col-md-1" >
                                    </div>

                                    <div className="col-md-4" >
                                       
                                    </div>

                                    <div className="col-md-1" >
                                    </div>

                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture headerName={this.state.headerName} background={this.state.headerPhoto1} id="Photo1" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture headerName={this.state.headerName} background={this.state.headerPhoto2} id="Photo2" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture headerName={this.state.headerName} background={this.state.headerPhoto3} id="Photo3" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture headerName={this.state.headerName} background={this.state.headerPhoto4} id="Photo4" methodToReturnUrl={this.handleReturnedUrl} />
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
                        <span className="btn-label"><i className="fa fa-check"></i></span> Valider l'espèce
                    </Button>

                    {this.state.EditMode ? deleteButton : null}
                </Panel>
            </ContentWrapper>
        );
    }

}

export default HeaderView;
