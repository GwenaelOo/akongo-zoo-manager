import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import AnimalsList from './AnimalsListView/AnimalsList/AnimalsList';
import { Tabs, Tab } from 'react-bootstrap';
let config = require("../../config/config");
let api = require("../Scripts/database_api.js");


class AnimalsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animalsList: []
        };
    }



    readAnimalsFromDatabase() {
        let userData = JSON.parse(localStorage.getItem('user'))

        let collection = (userData.zooName + '-animals')
        // Fonction magique que je ne comprend pas 
        var self = this;
        // Selection de la référence de la base de donnée

        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let newAnimalsList = self.state.animalsList
                newAnimalsList.push(doc.data())
                self.setState({
                    animalsList: newAnimalsList
                })
            });
        });
    }
    componentWillMount() {
        this.readAnimalsFromDatabase();
    }
    render() {
        console.log(this.state.animalsList)
        return (
            <ContentWrapper>
                <h3>Mes animaux</h3>
                {/* START row */}
                <div className="row">
            
                    <AnimalsList animalsList={this.state.animalsList} />
                </div>
                {/* END panel tab */}
            </ContentWrapper>
        );
    }

}

export default AnimalsListView;
