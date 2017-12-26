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
            password: ''
        });    
    }

    getId(){
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('logged')
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                console.log(email, uid)

            } else {
                if (window.location !== 'http://localhost:3000/login'){
                window.location.href = 'http://localhost:3000/login';
                 }
            }
        });
    }
    componentWillMount(){
        this.getId()
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
