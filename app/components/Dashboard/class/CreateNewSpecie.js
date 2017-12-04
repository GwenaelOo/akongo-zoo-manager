import React from 'react';
import ReactDOM from 'react-dom';
import './CreateNewSpecie.css';
import specie from './class-specie';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Radio, Icon } from 'antd';
import { Steps } from 'antd';

const Step = Steps.Step;

class CreateNewSpecie extends React.Component {
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
        let newSpecie = new specie(this.state.specieName, this.state.specieProfilePicturUrl, this.state.specieMaxAge, this.state.specieOrigin, this.state.originPictUrl, this.state.specieDescription, this.state.speciePictList, this.state.specieAmount, this.state.specieEnclosure);
        this.postSpecieToDataBase(newSpecie)
    }


    handleViewType(viewType) {

        if (viewType === 'Edit' && !this.state.updateDone) {
    console.log('i m in !')
        this.setState({
            specieName: 1,
            specieProfilePicturUrl: 2,
            specieMaxAge: 3,
            specieOrigin: 4,
            specieOriginPictUrl: 5,
            speciePictList: 6,
            specieDescription: 7,
            specieAmount: 8,
            specieEnclosure: 9,
            updateDone: true
        })
      }
    }

    render() {

        this.handleViewType(this.state.viewType) 

        return (
            <div className="Form">
                 
                <h1>{this.state.viewType}</h1>

                <form onSubmit={this.handleSubmit}>

                    <label className="data-input">
                        Nom de l'espece:
          <input
                            name="specieName"
                            type="text"
                            value={this.state.specieName}
                            onChange={this.handleInputChange} />
                    </label>


                    <label className="data-input">
                        URL de la photo de profile :
          <input
                            name="specieProfilePicturUrl"
                            type="text"
                            value={this.state.specieProfilePicturUrl}
                            onChange={this.handleInputChange} />
                    </label>

                    <label className="data-input">
                        Description de l'espèce :
          <input
                            name="specieDescription"
                            type="text"
                            value={this.state.specieDescription}
                            onChange={this.handleInputChange} />
                    </label>

                    <label className="data-input">
                        Age maximale de l'espece:
          <input
                            name="specieMaxAge"
                            type="text"
                            value={this.state.specieMaxAge}
                            onChange={this.handleInputChange} />
                    </label>

                    <label className="data-input">
                        Origine de l'espece:
          <input
                            name="specieOrigin"
                            type="text"
                            value={this.state.specieOrigin}
                            onChange={this.handleInputChange} />
                    </label>

                    <label className="data-input">
                        URL Photo Origine de l'espece:
          <input
                            name="originPictUrl"
                            type="text"
                            value={this.state.originPictUrl}
                            onChange={this.handleInputChange} />
                    </label>

                    <label className="data-input">
                        URL de photos:
          <input
                            name="speciePictsLists"
                            type="text"
                            value={this.state.speciePictsLists}
                            onChange={this.handleInputChange} />
                    </label>

                    <label className="data-input">
                        Nombre d'individue dans le zoo l'espece:
          <input
                            name="specieAmount"
                            type="text"
                            value={this.state.specieAmount}
                            onChange={this.handleInputChange} />
                    </label>

                    <label className="data-input">
                        Localisation de l'enclos de l'espece:
          <input
                            name="specieEnclosure"
                            type="text"
                            value={this.state.specieEnclosure}
                            onChange={this.handleInputChange} />
                    </label>

                    <br />
                    <Button type="primary" value="Submit" onClick={this.handleSubmit}> Ajouter la nouvelle Espece </Button>

                </form>
            </div>
        );
    }
}

export default CreateNewSpecie;