import React from 'react';
import {Switch, Router} from 'react-router-dom';
import styled from "styled-components";
import {withRouter} from 'react-router';
import PropTypes from "prop-types";
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
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PageTransition from "react-router-page-transition";

export const history = createHistory();

class AppRouter extends React.Component  {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    render() {
        const { match, location, history } = this.props;
            return (
                <div className="main-content">
                    <Header />
                        <TransitionGroup className="transition-group">
                            <CSSTransition
                            key={location.key}
                            timeout={{ enter: 300, exit: 300 }}
                            classNames={'fade'}
                            >
                                <section className="route-section">
                                
                                    <Switch location={location}>
                                        <PublicRoute path="/" component={DashboardPage} exact={true}/>
                                        <PublicRoute path="/projects" component={Projects} exact={true}/>
                                        <PublicRoute path="/academics" component={Academics} exact={true}/>
                                        <PublicRoute path="/career" component={Career} exact={true}/>
                                        <PublicRoute path="/tic-tac-toe" component={TicTacToe} exact={true}/>
                                        <PublicRoute path="/digit-recognition" component={DigitRecognition} exact={true}/>
                                        <PublicRoute component={NotFoundPage}/>
                                    </Switch>
                                </section>
                            </CSSTransition>
                        </TransitionGroup>
                    
                </div>

        )
    }
   
}



export default withRouter(AppRouter);