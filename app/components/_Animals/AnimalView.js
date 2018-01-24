import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// Ajout des composants du formulaire
import TextInput from './AnimalView/Components/TextInput';
import IUCNSelector from './AnimalView/Components/IUCNSelector';
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
            logId: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleReturnedUrl = this.handleReturnedUrl.bind(this);
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

        let animalData = {
            animalId: this.state.animalId,
            animalName: this.state.animalName,
            log: this.state.logId
        }

        api.deleteAnimalFromDatabase(animalData)
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
               log: this.state.logId + 1
           }

        console.log('animalId à la création', this.state.animalSpecieId)

        if(this.state.EditMode === true ){
            console.log('je edite')
            api.editNewAnimalToDatabase(animalData);
        }
        else {
            console.log('je crée')
            api.addNewAnimalToDatabase(animalData);
        }

        
    }

    readAnimalFromDatabase(animalId) {
        let userData = JSON.parse(localStorage.getItem('user'))
        var self = this
        // Fonction magique que je ne comprend pas 

        let docRef = firebase.firestore()
            .collection(userData.zooName + '-animals')
            .doc(animalId);

        docRef.get().then(function (snapshot) {
           
            let data = snapshot.data()
            console.log(data);
            self.setState({
                animalId: data.animalId,
                animalName: data.animalName,
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

    componentWillMount(){
    this.getLogLenght()

        if (this.props.location.state.view === 'edit' ){
            if (this.props.location.state.animalId !== null) {
                this.readAnimalFromDatabase(this.props.location.state.animalId)
            } 
        } 
    }

    render() {
      
        console.log(this.state.EditMode)
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
                <span className="btn-label"><i className="fa fa-trash-o"></i></span> Supprimer l'espèce
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

export default AnimalView;
