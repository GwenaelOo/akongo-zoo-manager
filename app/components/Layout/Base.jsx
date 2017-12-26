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
            userUid:''
        });   
        this.getUserInfos = this.getUserInfos.bind(this);  
        this.initUser = this.initUser.bind(this);
    }

    getUserInfos(userId) {
    
        var self = this;  
        var ref = firebase.database().ref('users/' + userId);
        ref.once('value').then(function (snapshot) {
            let userInfos = snapshot.val();
            console.log('Zoo du user logué : ' + userInfos.zooName);

           // self.setState({
           //     speciesAmount: speciesAmount
           // });

        }, function (error) {
            console.error(error);
        });
    }

    readFromlocal(){
        let userData = localStorage.getItem('user')
        console.log('nom du zoo lu en local' + userData.userZoo)
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
                });
            }
        })    
    }
    
    componentWillMount(){
        this.initUser()
    }

    componentDidMount(){
        this.readFromlocal()
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
