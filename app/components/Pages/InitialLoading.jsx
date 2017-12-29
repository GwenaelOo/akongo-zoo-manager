import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import { Router, Route, Link, History } from 'react-router-dom';

class InitialLoading extends React.Component {
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
                        zooName: userInfos.zooName
                    }

                    localStorage.setItem('user', JSON.stringify(dataToStore))


                }, function (error) {
                    console.error(error);
                }).then(function (valeur) {
                    window.location.href = 'http://localhost:3000/Dashboard';
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
        return (
            <div>
              
            </div>
        );
    }
}

export default InitialLoading;
