import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import initTranslation from './components/Common/localize';
import initLoadThemes from './components/Common/load-themes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './Routes';

// Application Styles
import './styles/bootstrap.scss';
import './styles/app.scss'


    // Configuration de l'app 

    var config = require("./config/config");

    // Init translation system
    initTranslation();
    // Init css loader (for themes)
    initLoadThemes();

    // Init dataBase
    config.initDatabase();

    // Definine url

        
ReactDOM.render((
    

    // specify basename below if running
    // in a subdirectory or set as "/" if app runs in root
    <MuiThemeProvider>
    <BrowserRouter basename={WP_BASE_HREF}>
        <Routes />
    </BrowserRouter>
    </MuiThemeProvider>
    
), document.getElementById('app'))
