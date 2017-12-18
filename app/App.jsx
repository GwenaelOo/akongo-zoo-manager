/*!
 *
 * Angle - Bootstrap Admin App + ReactJS
 *
 * Version: 3.8.1
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import initTranslation from './components/Common/localize';
import initLoadThemes from './components/Common/load-themes';

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

    // Init Auth 



ReactDOM.render((

    // specify basename below if running
    // in a subdirectory or set as "/" if app runs in root
    <BrowserRouter basename={WP_BASE_HREF}>
        <Routes />
    </BrowserRouter>
), document.getElementById('app'))
