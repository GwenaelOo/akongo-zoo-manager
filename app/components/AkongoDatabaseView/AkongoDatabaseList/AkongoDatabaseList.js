import React from 'react';
import AkongoListItem from '../AkongoListItem/AkongoListItem';


import { Tabs, Tab } from 'react-bootstrap'

class AkongoDatabaseList extends React.Component {

    componentDidMount() {

    }

    render() {

        let species = this.props.speciesList;

        const list = [];

        for (let specie in species) {

            let specieData = {
                SpecieName: species[specie].SpecieName,
                SpeciePhotoProfil: species[specie].SpeciePhotoProfil,
                SpecieId: species[specie].SpecieId
            };

            list.push(specieData);

        }



        return (
            <div>

                {
                    list.map(function (specie) { return <AkongoListItem specieData={specie} />; })
                }

            </div>

        );
    }

}

export default AkongoDatabaseList;