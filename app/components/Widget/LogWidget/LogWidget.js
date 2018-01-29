import React from 'react';
import ContentWrapper from '../../Layout/ContentWrapper';
import LogList from './LogList/LogList'

class LogWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logList: []
        };

    }

    readLogFromDatabase(){
        let userData = JSON.parse(localStorage.getItem('user'))

        let collection = (userData.zooName + '-log')
        // Fonction magique que je ne comprend pas 
        var self = this;
        // Selection de la référence de la base de donnée

        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let newLogList = self.state.logList
                console.log(newLogList)
                newLogList.push(doc.data())
                self.setState({
                    logList: newLogList
                })
            });
        });
    }
        
    componentWillMount() {
        this.readLogFromDatabase();
    }

    render() {
        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">Dernières activitées</div>
                        </div>
                            
                            <LogList logList={this.state.logList.reverse()} />
                           
                            <div className="panel-footer clearfix">
                                <a href="#" className="pull-left">
                                    <small>Load more</small>
                                </a>

                    </div>
                </div>
                        
        );
    }

}

export default LogWidget;

