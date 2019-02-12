import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import initialize from'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Header from './components/Header';


const jsx = (
        <div>
                <Router history={history}>
                        <AppRouter/>
                </Router>
        </div>
);

ReactDOM.render(jsx, document.getElementById('app'));