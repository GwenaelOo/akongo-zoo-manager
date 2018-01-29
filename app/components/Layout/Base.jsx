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
     
        });   
  
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
