import React from 'react';
import SpecieWidget from '../SpecieWidget/SpecieWidget';

import { Tabs, Tab } from 'react-bootstrap'

class SpecieList extends React.Component {

    componentDidMount() {

    }

    render() {

        return (
            <div>
                {
                    this.props.myList.map(function (specie) { return <SpecieWidget specieData={specie} />; })
                }
            </div>

        );
    }

}

export default SpecieList;