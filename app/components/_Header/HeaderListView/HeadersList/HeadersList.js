import React from 'react';
import HeaderWidget from '../HeaderWidget/HeaderWidget';


import { Tabs, Tab } from 'react-bootstrap'

class HeadersList extends React.Component {

    componentDidMount() {

    }

    render() {

        let services = this.props.headersList;

        const list = [];

        for (let header in headers) {

            let headerData = {
                headerName: headers[header].headerName,
               // headerPhotoProfil: headers[header].headerPhotoProfil,
                headerId: headers[header].headerId
            };    
            list.push(headerData);
        }

        return (
            <div>

                {
                 list.map(function (header) { return <HeaderWidget headerData={header} />; })
                }

            </div>

        );
    }

}

export default HeadersList;