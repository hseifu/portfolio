import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => (
    <div className="header">
        <div className="container">
            <div className="container__side-by-side">
                <NavLink to='/'>
                    <h1>{props.title}</h1>
                </NavLink>
                <NavLink to='/projects'>
                    <h1>Projects</h1>
                </NavLink>
                <NavLink to='/academics'>
                    <h1>Academics</h1>
                </NavLink>
                <NavLink to='/career'>
                    <h1>Career</h1>
                </NavLink>
            </div>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
)

Header.defaultProps = {
    title: 'Dashboard'
}



export default (Header);