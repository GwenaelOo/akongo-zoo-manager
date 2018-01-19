import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap'

class AkongoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }
    
    addSpecieToTheList(specie, prevList){

        let selectedList = this.props.specieSelectedList
        selectedList.push(specie)        
    }

    removeSpecieToTheList(specie){
       
        let IndexOfElementToRemove = this.props.specieSelectedList.indexOf(specie);
        console.log(IndexOfElementToRemove)
        this.props.specieSelectedList.splice(0,IndexOfElementToRemove)
    }
    
    handleCheck(e, b, list) {
     
        this.setState({
            isChecked: !this.state.isChecked
        })

        if (this.state.isChecked === true) {
            this.removeSpecieToTheList(e)            

        } else {
            this.addSpecieToTheList(e, list)
        }
        this.props.handleSelectedSpecie(this.props.specieSelectedList)
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


