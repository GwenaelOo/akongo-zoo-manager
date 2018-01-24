import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';
import TableExtendedRun from './TableExtended.run';
import AkongoListItem from './AkongoListItem/AkongoListItem';

const api = require("../Scripts/database_api.js");

class TableExtended extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speciesList: [],
            selectedSpecieList: [],
            filter: '',
            logId: 0
        };

    }

    handleClick(specieList){
        api.addSeveralSpeciesToDatabase(specieList, this.state.logId)
    }

    specieSelectedList = speciesList => {
        this.setState({
            selectedSpecieList: speciesList
        })
    }

    handleSearchChange = event => {
        this.setState({ filter: event.target.value });
    }

    handleSpecieSelect(key){
        console.log(key)
        let newSelectedSpecieList = this.state.selectedSpecieList
        newSelectedSpecieList.push(key)
        console.log(newSelectedSpecieList)
    }
    
    componentDidMount() {
        TableExtendedRun();
        this.readSpecieFromDatabase();
        this.getLogLenght();
    }

    getLogLenght() {
        let userData = JSON.parse(localStorage.getItem('user'))
        var self = this
        let collection = (userData.zooName + '-log')
        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            let logLenght = []
            querySnapshot.forEach(function (doc) {
                logLenght.push(doc.data())
            });

            let logId = logLenght.length;
            console.log(logId)
            self.setState({
                logId: logId
            });

        })
    }

    readSpecieFromDatabase() {
        let userData = JSON.parse(localStorage.getItem('user'))
        let collection = ('Akongo' + '-species')
        // Fonction magique que je ne comprend pas 
        var self = this;
        // Selection de la référence de la base de donnée

        firebase.firestore().collection(collection).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let newSpeciesList = self.state.speciesList
                newSpeciesList.push(doc.data())
                self.setState({
                    speciesList: newSpeciesList
                })
            });
        });
    }

    render() {
        console.log(this.state.selectedSpecieList)
        let filteredSpeciesListName = this.state.speciesList.filter(
            specie => {
                
                return specie.SpecieName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
            }
        )

        let filteredSpeciesListLatinName = this.state.speciesList.filter(
            specie => {
                return specie.SpecieLatinName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
            }
        )

        let filteredSpeciesListClass = this.state.speciesList.filter(
            specie => {
                return specie.SpecieClass.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
            }
        )

        let filteredSpeciesListOrder = this.state.speciesList.filter(
            specie => {
                return specie.SpecieOrder.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
            }
        )

        let filteredSpeciesList = filteredSpeciesListName.concat(filteredSpeciesListLatinName, filteredSpeciesListClass, filteredSpeciesListOrder)

        let specieAmount = this.state.selectedSpecieList.length

        let rows = filteredSpeciesList.map(specie => {
           
            return <AkongoListItem
             key={specie.SpecieId}
             specieId={specie.SpecieId}
             speciePhoto={specie.SpeciePhotoProfil}
             specieName={specie.SpecieName}
             specieLatinName={specie.SpecieLatinName}
             specieClass={specie.SpecieClass}
             specieOrder={specie.SpecieOrder}      
             specieSelectedList={this.state.selectedSpecieList} 
             handleSelectedSpecie={this.specieSelectedList}
             />
        })

        return (
            <ContentWrapper>
                <h3>Tables
                    <small>A showcase of different components inside tables</small>
                </h3>
                { /* START panel */}
                <div className="panel panel-default">
                    <div className="panel-heading">Nombre d'espèce selectionné  {this.state.selectedSpecieList.length}</div>
                    { /* START table-responsive */}
                    <Table id="table-ext-1" responsive bordered hover>
                        <thead>
                            <tr>
                                <th>UID</th>
                                <th>Photo</th>
                                <th>Nom de l'espèce</th>
                                <th>Nom Latin de l'espèce</th>
                                <th>Classe</th>
                                <th>Ordre</th>
                                <th>% de données</th>
                                <th>Last Login</th>
                               
                                <th data-check-all="data-check-all">
                                    <div data-toggle="tooltip" data-title="Check All" className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>{rows}</tbody>
                        
                    </Table>
                    { /* END table-responsive */}
                    <div className="panel-footer">
                        <Row>
                            <Col lg={2}>
                                <div className="input-group">
                                    <input type="text" placeholder="Search" value={this.state.filter} onChange={this.handleSearchChange} className="input-sm form-control" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-sm btn-default">Search</button>
                                    </span>
                                </div>
                            </Col>
                            <Col lg={8}></Col>
                            <Col lg={2}>
                                <div className="input-group pull-right">
                                    <span className="input-group-btn">  
                                    <Button bsClass="btn btn-labeled btn-success mr" bsSize="large" onClick={() => { this.handleClick(this.state.selectedSpecieList) }}>
                                            <span className="btn-label"><i className="fa fa-check"></i></span> Ajouter les {specieAmount} espèces à mon zoo
                                      </Button>)
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                { /* END panel */}
               
                  
                { /* END row */}
            </ContentWrapper>
        );
    }

}

export default TableExtended;