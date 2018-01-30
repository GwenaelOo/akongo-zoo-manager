import React from 'react';


class LogItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

    // Récupération du type d'action

        let actionType, infobulleColor, icon, textColor
       
        switch (this.props.logEvent.action) {
            case "create":
                actionType = "CREATION "  
                infobulleColor = "fa fa-circle fa-stack-2x text-success"
                icon = "fa fa-file-text-o fa-stack-1x fa-inverse text-white"
                textColor = "text-success m0"
                break;
                
            case "edit":
                actionType = "MODIFICATION "
                infobulleColor = "fa fa-circle fa-stack-2x text-info"
                icon = "fa fa-pencil-square-o fa-stack-1x fa-inverse text-white"
                textColor = "text-info m0"
                break;

            case "delete":
                actionType = "SUPPRESSION "
                infobulleColor = "fa fa-circle fa-stack-2x text-danger"
                icon = "fa fa-file-text-o fa-stack-1x fa-inverse text-white"
                textColor = "text-danger m0"
                break;        
            default:
                break;
        }

    // Récupération du type d'évenement 

        let eventType

        switch (this.props.logEvent.dataType) {
            case "specie":
                eventType = "ESPECE"
                break;

            case "animal":
                eventType = "ANIMAL"
                break;

            case "animation":
                eventType = "ANIMATION"      
                break;

            case "service":
                eventType = "SERVICE"
                break;
            default:
                break;
        }
    
        return (

            
            <div className="list-group-item">
                <div className="media-box">
                    <div className="pull-left">
                        <span className="fa-stack">
                            <em className={`${infobulleColor}`}></em>
                            <em className={`${icon}`}></em>
                        </span>
                    </div>
                    <div className="media-box-body clearfix">
                        <small className="text-muted pull-right ml">{this.props.logEvent.actionDate.substr(3, 18)}</small>
                        <div className="media-box-heading"><a href="#" className={`${textColor}`}>{actionType + eventType}</a>
                     </div>
                    <p className="m0">
                            <small><a href="#">{this.props.logEvent.elementName} par {this.props.logEvent.actionMadeByName}</a>
                            </small>
                        </p>
                    </div>
                </div>
            </div>                      
        );
    }

}

export default LogItem;

