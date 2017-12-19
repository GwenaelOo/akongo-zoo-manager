import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// Ajout des composants du formulaire
import TextInput from './Components/TextInput';
import IUCNSelector from './Components/IUCNSelector';
import DropzoneProfilePicture from '../Photosupload/DropzoneProfilePicture';

let api = require("../Scripts/database_api.js");

class AnimalView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            animalSpecieId:'',
            animalSpecie:'',
            animalId: '',
            animalName: '',
            animalLatinName: '',
            animalEnglishName: '',
            animalClass: '',
            animalOrder: '',
            animalFamilly: '',
            animalIUCNClassification: '',
            animalDescription: '',
            animalGestation: '',
            animalWeight: '',
            animalLifeExpectancy: '',
            animalPhotoProfil: '',
            animalPhoto1: '',
            animalPhoto2: '',
            animalPhoto3: '',
            animalPhoto4: '',
            EditMode: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleReturnedUrl = this.handleReturnedUrl.bind(this);
    }

    handleChange(event) {

        let name = event.target.name
        this.setState({ [name]: event.target.value });

        let animalData = {
            animalSpecieId: this.state.animalSpecieId,
            animalSpecie: this.state.animalSpecie,
            animalId: this.state.animalId,
            animalName: this.state.animalName,
            animalLatinName: this.state.animalLatinName,
            animalEnglishName: this.state.animalEnglishName,
            animalClass: this.state.animalClass,
            animalOrder: this.state.animalOrder,
            animalFamilly: this.state.animalFamilly,
            animalIUCNClassification: this.state.animalIUCNClassification,
            animalDescription: this.state.animalDescription,
            animalGestation: this.state.animalGestation,
            animalWeight: this.state.animalWeight,
            animalLifeExpectancy: this.state.animalLifeExpectancy,
            animalPhotoProfil: this.state.animalPhotoProfil,
            animalPhoto1: this.state.animalPhoto1,
            animalPhoto2: this.state.animalPhoto2,
            animalPhoto3: this.state.animalPhoto3,
            animalPhoto4: this.state.animalPhoto4,
        }   

        console.log(animalData)
    }

    handleReturnedUrl(returnedUrl, photoId) {

        let photoName = ('animal' + photoId)
        this.setState({
            [photoName]: returnedUrl
        });
    }

    handleClick(){

           let animalData = {
               animalSpecieId: this.state.animalSpecieId,
               animalSpecie: this.state.animalSpecie,
               animalId: this.state.animalId,
               animalName: this.state.animalName,
               animalLatinName: this.state.animalLatinName,
               animalEnglishName: this.state.animalEnglishName,
               animalClass: this.state.animalClass,
               animalOrder: this.state.animalOrder,
               animalFamilly: this.state.animalFamilly,
               animalIUCNClassification: this.state.animalIUCNClassification,
               animalDescription: this.state.animalDescription,
               animalGestation: this.state.animalGestation,
               animalWeight: this.state.animalWeight,
               animalLifeExpectancy: this.state.animalLifeExpectancy,
               animalPhotoProfil: this.state.animalPhotoProfil,
               animalPhoto1: this.state.animalPhoto1,
               animalPhoto2: this.state.animalPhoto2,
               animalPhoto3: this.state.animalPhoto3,
               animalPhoto4: this.state.animalPhoto4,
           }

        console.log('animalId à la création', this.state.animalSpecieId)

        if(this.state.EditMode === true ){
            api.editNewAnimalToDatabase(animalData);
        }
        else {
            api.addNewAnimalToDatabase(animalData);
        }

        
    }

    readanimalFromDatabase(animalId) {
        // Fonction magique que je ne comprend pas 
        var self = this;
        // Selection de la référence de la base de donnée
        var ref = firebase.database().ref('zooTest/species/' + this.state.animalSpecieId + this.state.animalId);
        // Type de requete
        ref.once('value').then(function (snapshot) {
            // The Promise was "fulfilled" (it succeeded).
            let data = snapshot.val()
            console.log(data);
            self.setState({
                animalId: data.animalId,
                animalName: data.animalName,
                animalLatinName: data.animalLatinName,
                animalEnglishName: data.animalEnglishName,
                animalClass: data.animalClass,
                animalOrder: data.animalOrder,
                animalFamilly: data.animalFamilly,
                animalIUCNClassification: data.animalIUCNClassification,
                animalDescription: data.animalDescription,
                animalGestation: data.animalGestation,
                animalWeight: data.animalWeight,
                animalLifeExpectancy: data.animalLifeExpectancy,
                animalPhotoProfil: data.animalPhotoProfil,
                animalPhoto1: data.animalPhoto1,
                animalPhoto2: data.animalPhoto2,
                animalPhoto3: data.animalPhoto3,
                animalPhoto4: data.animalPhoto4,
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


    componentWillMount(){
        if (this.props.location.state.SpecieId !== null) {
            console.log('recuperation de la specieId', this.props.location.state.SpecieId)
            this.setState({
                animalSpecieId: this.props.location.state.SpecieId
            })
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
                                    <label className="col-sm-2 control-label">Nom de l'Animal</label>
                            <Col sm={10}>
                                    <FormControl type="text" name="animalName" placeholder={this.state.animalSpecieId} value={this.state.animalName} onChange={this.handleChange} className="form-control" />
                            </Col>
                            </FormGroup>
                            <FormGroup>
                                    <label className="col-sm-2 control-label">Espèce</label>
                                    <Col sm={10}>
                                        <FormControl type="text" name="animalSpecie" placeholder="Ex. Gorilles" value={this.state.animalSpecie} onChange={this.handleChange} className="form-control" />
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
                                        <DropzoneProfilePicture animalName={this.state.animalName} background={this.state.animalPhotoProfil} id="PhotoProfil" methodToReturnUrl={this.handleReturnedUrl} />
                                    </div>

                                    <div className="col-md-1" >
                                    </div>

                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture animalName={this.state.animalName} background={this.state.animalPhoto1} id="Photo1" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture animalName={this.state.animalName} background={this.state.animalPhoto2} id="Photo2" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture animalName={this.state.animalName} background={this.state.animalPhoto3} id="Photo3" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                            <div className="col-md-6">
                                                <DropzoneProfilePicture animalName={this.state.animalName} background={this.state.animalPhoto4} id="Photo4" methodToReturnUrl={this.handleReturnedUrl} />
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>            
                            </FormGroup>
                        </fieldset>
                    </form>
                </Panel>

                <Panel>
                    <Button type="submit" bsStyle="default" onClick={() => { this.handleClick() }}>Valider la fiche Animal</Button>
                </Panel>
            </ContentWrapper>
        );
    }

}

export default AnimalView;
