import React from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Offsidebar from './Offsidebar'
import Footer from './Footer'



class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            url: 'http://www.akongo.fr/assets/background/Background-',
            email: 'test',
            password: '',
            userUid:'',
            userDataLoaded: false
        });   
        this.initUser = this.initUser.bind(this);
        this.userDataLoaded = this.userDataLoaded.bind(this);
    }

    userDataLoaded() {
        this.setState({
            userDataLoaded: true
        })
    }

    
    initUser(){
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
                  
                    localStorage.setItem('user',JSON.stringify(dataToStore))
                    
                
                }, function (error) {
                    console.error(error);
                    }).then(function (valeur) {
                       this.userDataLoaded();
                    }, function (raison) {
                        // Rejet de la promesse
                    });
            }
        })    
    }
 
    componentWillMount(){
        this.initUser()
    }

     
    render() {

        return (
            <div className="wrapper">
                <Header />

                <Sidebar />

                <Offsidebar />

                <section>
                    { this.props.children }
                </section>

                <Footer />
            </div>
        );
    }

}

export default Base;
