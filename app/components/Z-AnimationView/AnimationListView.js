import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import AnimationsList from './AnimationsList/AnimationsList';
import { Tabs, Tab } from 'react-bootstrap';
let config = require("../../config/config");
let api = require("../Scripts/database_api.js");


class AnimationsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationsList: []
        };

    }

    readAnimationsFromDatabase() {
        
        let userData = JSON.parse(localStorage.getItem('user'))
        let collection = (userData.zooName + '-animations')

        var self = this;

        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {

            
                let newAnimationsList = self.state.animationsList
                newAnimationsList.push(doc.data())

                self.setState({
                    animationsList: newAnimationsList
                })
            });
        });
    }
    componentWillMount() {
        this.readAnimationsFromDatabase();
    }
    render() {
        
        return (
            <ContentWrapper>
                <h3>Mes animations</h3>
                {/* START row */}
                <div className="row">
                    <AnimationsList animationsList={this.state.animationsList} />
                </div>
                {/* END panel tab */}
            </ContentWrapper>
        );
    }

}

export default AnimationsListView;
