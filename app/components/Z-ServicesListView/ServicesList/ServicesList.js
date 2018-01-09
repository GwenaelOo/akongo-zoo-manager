import React from 'react';
import ServiceWidget from '../ServiceWidget/ServiceWidget';


import { Tabs, Tab } from 'react-bootstrap'

class ServicesList extends React.Component {

    componentDidMount() {

    }

    render() {

        let services = this.props.servicesList;

        const list = [];

        for (let service in services) {

            let serviceData = {
                serviceName: services[service].serviceName,
                servicePhotoProfil: services[service].servicePhotoProfil,
                serviceId: services[service].serviceId
            };    
            list.push(serviceData);
        }

        return (
            <div>

                {
                 list.map(function (service) { return <ServiceWidget serviceData={service} />; })
                }

            </div>

        );
    }

}

export default ServicesList;