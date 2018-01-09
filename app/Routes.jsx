import React from 'react';
import { BrowserRouter, withRouter, Switch, Route, Redirect, Miss } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
import BaseHorizontal from './components/Layout/BaseHorizontal';

import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Recover from './components/Pages/Recover';
import Lock from './components/Pages/Lock';
import NotFound from './components/Pages/NotFound';
import Error500 from './components/Pages/Error500';
import Maintenance from './components/Pages/Maintenance';
import InitialLoading from './components/Pages/InitialLoading';

import Dashboard from './components/Dashboard/Dashboard';

import SpecieView from './components/_Species/SpecieView';
import SpeciesListView from './components/_Species/SpeciesListView';

import AnimalView from './components/_Animals/AnimalView';

import ServiceView from './components/_Services/ServiceView';
import ServiceListView from './components/_Services/ServicesListView';

import AnimationView from './components/_Animations/AnimationView';
import AnimationListView from './components/_Animations/AnimationListView';

import AkongoDatabaseView from './components/AkongoDatabaseView/AkongoDatabaseView';


// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/login',
    '/register',
    '/recover',
    '/lock',
    '/notfound',
    '/error500',
    '/maintenance',
    '/InitialLoading'
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInUp'
    //      'rag-fadeInDown'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'
    //      'rag-fadeInUpBig'
    //      'rag-fadeInDownBig'
    //      'rag-fadeInRightBig'
    //      'rag-fadeInLeftBig'
    //      'rag-zoomBackDown'
    const animationName = 'rag-fadeInRight'

    if(listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <BasePage>
                <Switch location={location}>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/recover" component={Recover}/>
                    <Route path="/lock" component={Lock}/>
                    <Route path="/notfound" component={NotFound}/>
                    <Route path="/error500" component={Error500}/>
                    <Route path="/maintenance" component={Maintenance}/>
                    <Route path="/InitialLoading" component={InitialLoading} />
                </Switch>
            </BasePage>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
              <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName}>
                    <div>
                        <Switch location={location}>

                            {/*SpecieListView*/}
                            <Route path="/Dashboard" component={Dashboard} />

                            {/*SpecieListView*/}
                           

                            {/*Species*/}
                            <Route path="/SpecieView" component={SpecieView} />
                            <Route path="/SpeciesList" component={SpeciesListView} />

                            {/*Animal*/}
                            <Route path="/AnimalView" component={AnimalView} />

                            {/*Service*/}
                            <Route path="/ServiceView" component={ServiceView} />
                            <Route path="/ServiceListView" component={ServiceListView} />

                            {/*Service*/}
                            <Route path="/AnimationView" component={AnimationView} />
                            <Route path="/AnimationListView" component={AnimationListView} />

                            {/*AkongoDatabase*/}
                            <Route path="/AkongoDatabaseView" component={AkongoDatabaseView} />
                          
            

                            <Redirect to="/login"/>
                        </Switch>
                    </div>
                </CSSTransition>
              </TransitionGroup>
            </Base>
        )
    }
}

export default withRouter(Routes);