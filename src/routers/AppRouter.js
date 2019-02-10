import React from 'react';
import {Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Academics from '../components/Academics';
import Career from '../components/Career';
import TicTacToe from '../components/TicTacToe';
import DigitRecognition from '../components/DigitRecognition';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <PublicRoute path="/" component={DashboardPage} exact={true}/>
                <PublicRoute path="/projects" component={Projects} exact={true}/>
                <PublicRoute path="/academics" component={Academics} exact={true}/>
                <PublicRoute path="/career" component={Career} exact={true}/>
                <PublicRoute path="/tic-tac-toe" component={TicTacToe} exact={true}/>
                <PublicRoute path="/digit-recognition" component={DigitRecognition} exact={true}/>
                <PublicRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;