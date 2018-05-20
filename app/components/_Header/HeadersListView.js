import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import HeadersList from './HeaderListView/HeadersList/HeadersList';
import { Tabs, Tab } from 'react-bootstrap';
let config = require("../../config/config");
let api = require("../Scripts/database_api.js");


class HeadersListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HeadersList: []
        };

    }

    readHeadersFromDatabase() {
        let userData = JSON.parse(localStorage.getItem('user'))
        let collection = (userData.zooName + '-headers')

        var self = this;

        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let newHeadersList = self.state.HeadersList
                newHeadersList.push(doc.data())

                self.setState({
                    HeadersList: newHeadersList
                })
            });
        });

    }
    componentWillMount() {
        this.readHeadersFromDatabase();
    }
    render() {
        console.log(this.state.headersList)
        return (
            <ContentWrapper>
                <h3>Mes headers</h3>
                {/* START row */}
                <div className="row">
                    <HeadersList headerList={this.state.headersList} />
                </div>
                {/* END panel tab */}
            </ContentWrapper>
        );
    }

}

export default HeadersListView;

// 