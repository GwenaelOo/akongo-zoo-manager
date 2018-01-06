import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router-dom';
import pubsub from 'pubsub-js';
import { Collapse } from 'react-bootstrap';
import SidebarRun from './Sidebar.run';

class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            userBlockCollapse: false,
            collapse: {
                
                species: this.routeActive(['seeSpecies', 'addSpecies', 'modifySpecies']), 
                services: this.routeActive(['seeSpecies', 'addSpecies', 'modifySpecies']),
                animations: this.routeActive(['seeSpecies', 'addSpecies', 'modifySpecies']),  
                elements: this.routeActive(['buttons', 'notifications', 'sweetalert', 'tour', 'carousel', 'spinners', 'animations', 'dropdown', 'nestable', 'sortable', 'panels', 'portlet', 'grid', 'grid-masonry', 'typography', 'icons-font', 'icons-weather', 'colors']),       
                pages: false
            }
        };
        this.pubsub_token = pubsub.subscribe('toggleUserblock', () => {
            this.setState({
                userBlockCollapse: !this.state.userBlockCollapse
            });
        });
    };

    componentDidMount() {
        // pass navigator to access router api
        SidebarRun(this.navigator.bind(this));
    }

    navigator(route) {
        this.props.router.push(route)
    }

    componentWillUnmount() {
        // React removed me from the DOM, I have to unsubscribe from the pubsub using my token
        pubsub.unsubscribe(this.pubsub_token);
    }

    routeActive(paths) {
        paths = Array.isArray(paths) ? paths : [paths];
        if (paths.indexOf(this.props.location.pathname.replace('/', '')) > -1)
            return true;
        return false;
    }

    toggleItemCollapse(stateName) {
        var newCollapseState = {};
        for (let c in this.state.collapse) {
            if (this.state.collapse[c] === true && c !== stateName)
                this.state.collapse[c] = false;
        }
        this.setState({
            collapse: {
                [stateName]: !this.state.collapse[stateName]
            }
        });
    }

    render() {
        return (
            <aside className='aside'>
                { /* START Sidebar (left) */}
                <div className="aside-inner">
                    <nav data-sidebar-anyclick-close="" className="sidebar">
                        { /* START sidebar nav */}
                        <ul className="nav">
                            { /* START user info */}
                            <li className="has-user-block">
                                <Collapse id="user-block" in={this.state.userBlockCollapse}>
                                    <div>
                                        <div className="item user-block">
                                            { /* User picture */}
                                            <div className="user-block-picture">
                                                <div className="user-block-status">
                                                    <img src="img/user/02.jpg" alt="Avatar" width="60" height="60" className="img-thumbnail img-circle" />
                                                    <div className="circle circle-success circle-lg"></div>
                                                </div>
                                            </div>
                                            { /* Name and Job */}
                                            <div className="user-block-info">
                                                <span className="user-block-name">Hello, Gwen</span>
                                                <span className="user-block-role">Webmaster</span>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </li>
                            { /* END user info */}

                            { /* Menu Management des epèces*/}



                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.HEADER">Menu de navigation</span>
                            </li>

                            <li className={this.routeActive('dashboard') ? 'active' : ''}>
                                <Link to="Dashboard" title="Widgets">
                                    
                                    <em className="icon-speedometer"></em>
                                    <span data-localize="sidebar.nav.DASHBOARD">Dashboard</span>
                                </Link>
                            </li>
                         

                            { /* Menu Management des epèces*/
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.HEADER">Gestion des données</span>
                            </li>}
                        
                            <li className={this.routeActive(['SeeSpecies', 'AddSpecies', 'ModifySpecies']) ? 'active' : ''}>
                                <div className="nav-item" onClick={this.toggleItemCollapse.bind(this, 'species')}>
                                    <em className="icon-grid"></em>
                                    <span data-localize="sidebar.nav.DASHBOARD">Gestion des espèces</span>
                                </div>
                                <Collapse in={this.state.collapse.species} timeout={100}>
                                    <ul id="species" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Gestion des espèces</li>
                                        <li className={this.routeActive('SeeSpecies') ? 'active' : ''}>
                                            <Link to="SpeciesList" title="SpeciesListView">
                                                <span>Voir toutes les espèces</span>
                                            </Link>
                                        </li>
                                        <li className={this.routeActive('SeeSpecies') ? 'active' : ''}>
                                            <Link to={{
                                                pathname: "NewSpeciePage",
                                                state: { SpecieId: null }
                                            }}>
                                                <span>Ajouter une espèce</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                            <li className={this.routeActive(['SeeSpecies', 'AddSpecies', 'ModifySpecies']) ? 'active' : ''}>
                                <div className="nav-item" onClick={this.toggleItemCollapse.bind(this, 'services')}>
                                    <em className="fa fa-cutlery"></em>
                                    <span data-localize="sidebar.nav.DASHBOARD">Gestion des services</span>
                                </div>
                                <Collapse in={this.state.collapse.services} timeout={100}>
                                    <ul id="myThings" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Gestion des services</li>
                                        <li className={this.routeActive('SeeSpecies') ? 'active' : ''}>
                                            <Link to="ServiceListView" title="SpeciesListView">
                                                <span>Voir tous les services</span>
                                            </Link>
                                        </li>
                                        <li className={this.routeActive('SeeSpecies') ? 'active' : ''}>
                                            <Link to={{
                                                pathname: "ServiceView",
                                                state: { serviceId: null }
                                            }}>
                                                <span>Ajouter un service</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>

                            <li className={this.routeActive(['SeeAnimation']) ? 'active' : ''}>
                                <div className="nav-item" onClick={this.toggleItemCollapse.bind(this, 'animations')}>
                                    <em className="fa fa-ticket"></em>
                                    <span data-localize="sidebar.nav.ANIMATION">Gestion des animations</span>
                                </div>
                                <Collapse in={this.state.collapse.animations} timeout={100}>
                                    <ul id="myThings" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Gestion des animations</li>
                                        <li className={this.routeActive('SpeciesListView') ? 'active' : ''}>
                                            <Link to="SpeciesList" title="SpeciesListView">
                                                <span>Voir les animations</span>
                                            </Link>
                                        </li>
                                        <li className={this.routeActive('SeeSpecies') ? 'active' : ''}>
                                            <Link to={{
                                                pathname: "AnimationView",
                                                state: { SpecieId: null }
                                            }}>
                                                <span>Ajouter une animations</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Collapse>
                            </li>

                      
                    
                        </ul>
                        { /* END sidebar nav */}
                    </nav>
                </div>
                { /* END Sidebar (left) */}
            </aside>
        );
    }

}

export default withRouter(Sidebar);