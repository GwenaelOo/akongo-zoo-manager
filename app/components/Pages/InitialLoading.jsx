import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import { Router, Route, Link, History } from 'react-router-dom';

const akongoURL = 'http://localhost:3000/' 
//const akongoURL = 'http://localhost:3000/' 

class InitialLoading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    initUser() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.uid, 'logged')

                var self = this;
                var ref = firebase.database().ref('users/' + user.uid);
                ref.once('value').then(function (snapshot) {
                    let userInfos = snapshot.val();
                    console.log('Zoo du user logué : ' + userInfos.zooName);

                    let dataToStore = {
                        userId: user.uid,
                        zooName: userInfos.zooName,
                        firstname: userInfos.firstname,
                        zooNameDisplay: userInfos.zooNameDisplay
                    }

                    localStorage.setItem('user', JSON.stringify(dataToStore))

                    let urlToStore = {
                        akongoURL: akongoURL
                    }
                    localStorage.setItem('nav', JSON.stringify(urlToStore))


                }, function (error) {
                    console.error(error);
                }).then(function (valeur) {
                    window.location.href = akongoURL + 'Dashboard';
                }, function (raison) {
                    // Rejet de la promesse
                });
            }
        })
    }

    
    componentDidMount() {
        this.initUser()
    }
    render() {
        if(this.state.redirect === true){
            
        }
        return (
            <div>
              
            </div>
        );
    }
}

export default InitialLoading;
