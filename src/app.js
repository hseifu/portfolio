import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import initialize from'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const jsx = (
        <AppRouter/>
);

ReactDOM.render(jsx, document.getElementById('app'));