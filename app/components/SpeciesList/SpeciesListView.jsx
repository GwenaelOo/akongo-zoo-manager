import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import SpecieList from './SpecieList/SpecieList';
import { Tabs, Tab } from 'react-bootstrap';
var config = require("../../config/config");


let api = require("../Scripts/database_api.js");

const specie = {
    specieProfilPicture: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

let speciesList = [
    specie, specie, specie, specie, specie, specie, specie, specie
];


class SpeciesListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speciesList: speciesList
        };
    
    }

    readSpecieFromDatabase() {
        // Fonction magique que je ne comprend pas 
        var self = this;
        // Selection de la référence de la base de donnée
        var ref = firebase.database().ref('zooTest/species/');
        // Type de requete
        ref.once('value').then(function (snapshot) {
            // The Promise was "fulfilled" (it succeeded).
            let data = snapshot.val()

            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var myObject = data[i];
                var firstKey = Object.keys(myObject)[0];
                var value = myObject[firstKey];

                console.log(firstKey + ": " + value);
            }
            self.setState({
                speciesList: data
            });
        }, function (error) {
            // The Promise was rejected.
            console.error(error);
        });

    }

    componentDidMount() {
        this.readSpecieFromDatabase();
    }
    render() {
            console.log(this.state.speciesList)
        return (
            <ContentWrapper>
                <h3>Mes animaux</h3>
                {/* START row */}
                <div className="row">
                    <SpecieList myList={speciesList} />
                </div>
                {/* END panel tab */}
            </ContentWrapper>
        );
    }

}

export default SpeciesListView;
