import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import ServicesList from './ServicesListView/ServicesList/ServicesList';
import { Tabs, Tab } from 'react-bootstrap';
let config = require("../../config/config");
let api = require("../Scripts/database_api.js");


class ServicesListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ServicesList: []
        };

    }

    readServicesFromDatabase() {
        let userData = JSON.parse(localStorage.getItem('user'))

        let collection = (userData.zooName + '-services')

        var self = this;
     
        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let newServicesList = self.state.ServicesList
                newServicesList.push(doc.data())

                self.setState({
                    ServicesList: newServicesList
                })
            });
        });


    }
    componentWillMount() {
        this.readServicesFromDatabase();
    }
    render() {
        console.log(this.state.ServicesList)
        return (
            <ContentWrapper>
                <h3>Mes services</h3>
                {/* START row */}
                <div className="row">
                    <ServicesList servicesList={this.state.ServicesList} />
                </div>
                {/* END panel tab */}
            </ContentWrapper>
        );
    }

}

export default ServicesListView;
