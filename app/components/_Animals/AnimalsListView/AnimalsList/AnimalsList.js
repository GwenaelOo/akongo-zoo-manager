import React from 'react';
import AnimalWidget from '../AnimalWidget/AnimalWidget';


import { Tabs, Tab } from 'react-bootstrap'

class AnimalsList extends React.Component {

    componentDidMount() {

    }

    render() {

        let animals = this.props.animalsList;

        const list = [];

        for (let animal in animals) {

            let animalData = {
                animalName: animals[animal].animalName,
                animalPhotoProfil: animals[animal].animalPhotoProfil,
                animalId: animals[animal].animalId
            };

            list.push(animalData);

        }

        return (
            <div>

                {
                    list.map(function (animal) { return <AnimalWidget animalData={animal} />; })
                }

            </div>

        );
    }

}

export default AnimalsList;