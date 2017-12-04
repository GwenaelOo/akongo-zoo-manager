import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl } from 'react-bootstrap';
import FormWizardRun from './FormWizard.run';
import specie from './class/class-specie';
import FormExtendedRun from './FormExtended.run';
import FormUpload from '../Forms/FormUpload';
import TextInput from './FormComponents/TextInput';
import IUCNSelector from './FormComponents/IUCNSelector';


class FormWizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            specieName: '',
            specieProfilePicturUrl: '',
            specieMaxAge: '',
            specieOrigin: '',
            specieDescription: '',
            speciePictList: '',
            specieAmount: '',
            specieEnclosure: '',

            viewType: this.props.viewType
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        FormExtendedRun();
    }

    postSpecieToDataBase(newSpecie) {

        let url = 'http://localhost:3099/posts/'
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                specieName: newSpecie._specieName,
                specieProfilePicturUrl: newSpecie._specieProfilePicturUrl,
                specieMaxAge: newSpecie._specieMaxAge,
                specieOrigin: newSpecie._specieOrigin,
                specieOriginPictUrl: newSpecie._specieOriginPictUrl,
                speciePictList: newSpecie._speciePictList,
                specieDescription: newSpecie._specieDescription,
                specieAmount: newSpecie._specieAmount,
                specieEnclosure: newSpecie._specieEnclosure
            })
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)).then(jsonResponse => {

            return jsonResponse;
        });
    }


    handleSubmit(event) {
        console.log(event)
        let newSpecie = new specie(this.state.specieName, this.state.specieProfilePicturUrl, this.state.specieMaxAge, this.state.specieOrigin, this.state.originPictUrl, this.state.specieDescription, this.state.speciePictList, this.state.specieAmount, this.state.specieEnclosure);
        this.postSpecieToDataBase(newSpecie)
    }


    componentDidMount() {
        FormWizardRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Ajouter une nouvelle Espèce</h3>
                <Panel className="Panel" header="Formulaire d'ajout d'une nouvelle espèce">
                    <form id="example-form" className="form-horizontal" action="#" method='post' >
                        <div>
                            <h4>Choix de l'espèce
                               <br />
                                <small>Ajoutez des informations de base </small>
                            </h4>
                            <fieldset className='fieldset'>

                                <legend> Informations générales</legend>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextInput id="SpecieName" label="Nom de l'espèce" name="SpecieName" placeholder="Ex. Gorilles" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextInput id="SpecieLatinName" label="Nom Latin" name="SpecieLatinName" placeholder="Ex. gorilla gorilla" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextInput id="SpecieEnglishName" label="Nom Anglais" name="SpecieEnglishName" placeholder="Ex. Gorilla" />
                                       
                                    </div>
                                    <div>
                                       
                                      
                                    </div>
                                </div>
                                 <br />

                                <div className="row">
                                    <div className="col-md-4">
                                        <TextInput id="SpecieClass" label="Classe" name="SpecieClass" placeholder="Ex. Mammifères" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextInput id="SpecieOrder" label="Ordre" name="SpecieOrder" placeholder="Ex. Primates" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextInput id="SpecieFamilly" label="Famille" name="SpecieFamilly" placeholder="Ex. hominidés" />
                                    </div>
                                </div>
                                <br />
                                <legend>Niveau de menace</legend>
                                <div className="row">
                                <div className="col-md-4">
                                        <IUCNSelector label="Classification IUCN" name="SpecieIUCNClassification" id="SpecieIUCNClassification" />
                                </div>
                                <div className="col-md-8">
                                        <label htmlFor="userName">Description des menaces</label>
                                        <Panel>      
                                            <textarea name="SpecieDescription" rows="10" className="form-control note-editor"></textarea>
                                        </Panel>
                                </div>
                                </div>
                        <fieldset />


                            </fieldset>
                            <h4>Description de l'espèce
                               <br />
                                <small>Dites en plus sur cette espèce</small>
                            </h4>
                            
                            <fieldset>
                            

                                <legend> Informations Biologique</legend>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextInput id="SpecieGestation" label="Durée de la gestation" name="SpecieGestation" placeholder="Ex. 23 semaines" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextInput id="SpecieWeight" label="Poid en kg" name="SpecieWeight" placeholder="Ex. 23 kg" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextInput id="SpecieLifeExpectancy" label="Esperance de vie" name="SpecieLifeExpectancy" placeholder="Ex. 12 ans" />
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-md-4">
                                        <TextInput id="SpecieOrigin" label="Origine Géographique" name="SpecieOrigin" placeholder="Ex. Afrique de L'ouest" />
                            
                                    </div>
                                    <div className="col-md-4">
                                        <TextInput id="SpecieHabitat" label="Millieu" name="SpecieHabitat" placeholder="Ex. Savane" />
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <TextInput id="SpecieDiet" label="Alimentation" name="SpecieDiet" placeholder="Ex. Dragibus" />
                                    </div>
                                </div>

                            </fieldset>
                            <h4>Ajouts des photos
                               <br />
                                <small>Ajoutez vos meilleurs photos</small>
                                

                            </h4>
                            <fieldset>
                                <p className="lead text-center">Elles seront disponible pour vos visiteurs</p>
                                <FormUpload />
                            </fieldset>
                            <h4>Validation
                               <br />
                                <small>Validez l'ensemble de vos données</small>
                            </h4>
                            <fieldset>

                                <p className="lead">One last check</p>


                            








                            </fieldset>
                        </div>
                    </form>
                </Panel>

            </ContentWrapper>
        );
    }

}

export default FormWizard;

