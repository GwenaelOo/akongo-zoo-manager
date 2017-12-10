import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// Ajout des composants du formulaire
import TextInput from '../Dashboard/FormComponents/TextInput';
import IUCNSelector from '../Dashboard/FormComponents/IUCNSelector';
import DropzoneProfilePicture from '../Photosupload/DropzoneProfilePicture';



class NewSpeciePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            SpecieName: '',
            SpecieLatinName: '',
            SpecieEnglishName: '',
            SpecieClass: '',
            SpecieOrder: '',
            SpecieFamilly: '',
            SpecieIUCNClassification: '',
            SpecieDescription: '',
            SpecieGestation: '',
            SpecieWeight: '',
            SpecieLifeExpectancy: '',
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        let name = event.target.name

        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {

        let specieData = {
              SpecieName: this.state.SpecieName,
                  SpecieLatinName: this.state.SpecieLatinName,
                  SpecieEnglishName: this.state.SpecieEnglishName,
                  SpecieClass: this.state.SpecieClass,
                  SpecieOrder: this.state.SpecieOrder,
                  SpecieFamilly: this.state.SpecieFamilly,
                  SpecieIUCNClassification: this.state.SpecieIUCNClassification,
                  SpecieDescription: this.state.SpecieDescription,
                  SpecieGestation: this.state.SpecieGestation,
                  SpecieWeight: this.state.SpecieWeight,
                  SpecieLifeExpectancy: this.state.SpecieLifeExpectancy,
        }

        console.log(specieData)

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
                { /* START panel */}
              
               
                { /* START panel */}
                <Panel header="Form elements">
                    <form method="get" action="/" className="form-horizontal">
                        <fieldset>
                            <legend> Informations générales</legend>
                       
                        <fieldset>
                            <FormGroup>
                                    <label className="col-sm-2 control-label">Nom de l'espèce</label>
                            <Col sm={10}>
                                        <FormControl type="text" name="SpecieName" placeholder="Ex. Gorilles" value={this.state.SpecieName} onChange={this.handleChange} className="form-control" />
                                </Col>
                            </FormGroup>
                        </fieldset>

                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Nom Latin</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="SpecieLatinName" placeholder="Ex. gorilla gorilla" className="form-control" value={this.state.SpecieLatinName} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                            </fieldset>
                            
                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Nom Anglais</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="SpecieEnglishName" placeholder="Ex. Gorilla" className="form-control" value={this.state.SpecieEnglishName} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                            </fieldset>

                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Classe </label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="SpecieClass" placeholder="Ex. Mammifères" className="form-control" value={this.state.SpecieClass} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                            </fieldset>

                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Ordre </label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="SpecieOrder" placeholder="Ex. Primates" className="form-control" value={this.state.SpecieOrder} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                            </fieldset>


                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Famille </label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="SpecieFamilly" placeholder="Ex. hominidés" value="" className="form-control" value={this.state.SpecieFamilly} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </fieldset>

                        <fieldset>
                            <legend>Niveau de menace</legend>
                           
                            <div className="row">
                                <div className="col-md-4">
                                    <div>
                                        <label htmlFor="userName">Classification IUCN</label>
                                        <FormControl componentClass="select" value={this.state.SpecieIUCNClassification} required="required" className="form-control" value={this.state.SpecieIUCNClassification} onChange={this.handleChange}>
                                            <option></option>
                                            <option>Préoccupation mineure (LC)</option>
                                            <option>Espèce quasi menacée (NT)</option>
                                            <option>Espèce vulnérable (VU)</option>
                                            <option>Espèce en danger (EN)</option>
                                            <option>En danger critique d'extinction (CR)</option>
                                            <option>Éteint à l'état sauvage (EW)</option>
                                            <option>Éteint (EX)</option>
                                            <option>Données insuffisantes (DD)</option>
                                            <option>Non-Évalué (NE)</option>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <label htmlFor="userName">Description des menaces</label>
                                    <Panel>
                                        <textarea name="SpecieDescription" rows="10" className="form-control note-editor" value={this.state.SpecieDescription} onChange={this.handleChange}>
                                        </textarea>
                                    </Panel>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend> Informations générales</legend>


                         

                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Durée de la gestation</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="SpecieGestation" placeholder="Ex. 23 semaines" className="form-control" value={this.state.SpecieGestation} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                            </fieldset>

                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Poid en kg</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="SpecieWeight" placeholder="Ex. 23 kg" className="form-control" value={this.state.SpecieWeight} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                            </fieldset>

                            <fieldset>
                                <FormGroup>
                                    <label className="col-sm-2 control-label">Esperance de vie</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="SpecieLifeExpectancy" placeholder="Ex. 12 ans" className="form-control" value={this.state.SpecieLifeExpectancy} onChange={this.handleChange} />
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
                                        <DropzoneProfilePicture />
                                    </div>

                                    <div className="col-md-1" >
                                    </div>

                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1" >
                                    </div>
                                </div>            
                            </FormGroup>
                        </fieldset>
                    </form>
                </Panel>
                { /* END panel */}
            </ContentWrapper>
        );
    }

}

export default NewSpeciePage;
