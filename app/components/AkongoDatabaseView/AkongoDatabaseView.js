import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';
import TableExtendedRun from './TableExtended.run';

class TableExtended extends React.Component {
    componentDidMount() {
        TableExtendedRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Tables
                               <small>A showcase of different components inside tables</small>
                </h3>
                { /* START panel */}
                <div className="panel panel-default">
                    <div className="panel-heading">Demo Table #1</div>
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
                        <tbody>



                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="media">
                                        <img src="img/user/01.jpg" alt="Image" className="img-responsive img-circle" />
                                    </div>
                                </td>
                                <td>Gorille</td>
                                <td>gorilla gorilla</td>
                                <td>Mammifère</td>
                                <td>Primate</td>
                                <td className="text-center">
                                    <div data-label="100%" className="radial-bar radial-bar-100 radial-bar-xs"></div>
                                </td>
                                <td>1 week</td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                            </tr>



                        </tbody>
                    </Table>
                    { /* END table-responsive */}
                    <div className="panel-footer">
                        <Row>
                            <Col lg={2}>
                                <div className="input-group">
                                    <input type="text" placeholder="Search" className="input-sm form-control" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-sm btn-default">Search</button>
                                    </span>
                                </div>
                            </Col>
                            <Col lg={8}></Col>
                            <Col lg={2}>
                                <div className="input-group pull-right">
                                    <select className="input-sm form-control">
                                        <option value="0">Bulk action</option>
                                        <option value="1">Delete</option>
                                        <option value="2">Clone</option>
                                        <option value="3">Export</option>
                                    </select>
                                    <span className="input-group-btn">
                                        <button className="btn btn-sm btn-default">Apply</button>
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