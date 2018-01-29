import React from 'react';
import ContentWrapper from '../../../Layout/ContentWrapper';
import LogItem from '../LogItem/LogItem'

class LogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speciesList: []
        };

    }

    render() {
        console.log(this.props.logList)
        

        let logs = this.props.logList;

        const list = [];

        for (let event in logs) {

            let newEvent = {
                action: logs[event].action,
                dataType: logs[event].dataType,
                elementName: logs[event].elementName,
                actionMadeById: logs[event].actionMadeById,
                actionMadeByName: logs[event].actionMadeByName,
                zooName: logs[event].zooName,
                actionDate: logs[event].actionDate
            };

            list.push(newEvent);
        }

        return (
            <div className="list-group">

                {
                    list.map(function (event) { return <LogItem logEvent={event} />; })
                }
  
            </div>
                            
        );
    }

}

export default LogList;

