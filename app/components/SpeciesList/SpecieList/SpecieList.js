import React from 'react';
import SpecieWidget from '../SpecieWidget/SpecieWidget';

import { Tabs, Tab } from 'react-bootstrap'

class SpecieList extends React.Component {

    componentDidMount() {
    
    }

    render() {
       
      let species = this.props.speciesList

      const list = []

      for (let specie in species){
          console.log(species[specie].specieName)

          let specieData = {
              SpecieName: species[specie].specieName,
              SpeciePhotoProfil: species[specie].SpeciePhotoProfil,
              SpecieId: species[specie].SpecieId
          };

          list.push(specieData);

          console.log(list)
      }

      
        return (
            <div>

                {
                    list.map(function (specie) { return <SpecieWidget specieData={specie} />; })
                }



                {
                   // this.props.myList.map(function (specie) { return <SpecieWidget specieData={specie} />; })
                }
            </div>

        );
    }

}

export default SpecieList;