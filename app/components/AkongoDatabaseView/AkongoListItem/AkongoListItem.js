import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap'

class AkongoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            amIright: 'lol',
            list: []
        };
        this.addSpecieToTheList = this.addSpecieToTheList.bind(this);
        this.removeSpecieToTheList = this.removeSpecieToTheList.bind(this);
    }

    addSpecieToTheList(specie){
        console.log(this.state.list)
        console.log('etat de la liste à l ajout' + this.state.list)
        let newList = this.state.list
        newList.push(specie)
        this.setState({
            list: newList,
        })
    }

    removeSpecieToTheList(specie){
        console.log(this.state.list)
        console.log(this.state.isChecked)
        console.log(this.state.amIright)
        let newList = this.state.list
        console.log('c ma liste' + newList)
        console.log('c mon e' + specie)
        let IndexOfElementToRemove = newList.indexOf(specie);
        newList.splice(IndexOfElementToRemove)

        this.setState({
            list: this.newList
        })

    }
    
    handleCheck(e) {
        console.log('etat de la liste a l entree')
        console.log(this.state.list)

        this.setState({
            isChecked: !this.state.isChecked
        })

        if (this.state.isChecked === true) {
            console.log('suppression de l espece' + e)
            this.removeSpecieToTheList(e)            

        } else {
            console.log('ajout de l espece ' + e)
            this.addSpecieToTheList(e)
        }
        console.log('etat de la liste a la sortie')
        console.log(this.state.list)
    
    }
    render() {
        return ( 
            <tr>
                <td>{this.props.specieUid}</td>
                <td>
                    <div className="media">
                        <img src={this.props.speciePhoto} alt="Image" className="img-responsive img-circle" />
                    </div>
                </td>
                <td>{this.props.specieName}</td>
                <td>{this.props.specieLatinName}</td>
                <td>{this.props.specieClass}</td>
                <td>{this.props.specieOrder}</td>
                <td className="text-center">
                    <div data-label="100%" className="radial-bar radial-bar-100 radial-bar-xs"></div>
                </td>
                <td>1 week</td>
                <td>Voir</td>
                <td>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input type="checkbox" name={this.props.specieId} defaultChecked={this.state.isChecked} onClick={(e) => this.handleCheck(this.props.specieId, this.state.isChecked, this.state.list)}  />
                            <em className="fa fa-check"></em>
                        </label>
                    </div>
                </td>
            </tr>  
        );
    }

}

export default AkongoListItem;


