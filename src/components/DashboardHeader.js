import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
    return (
    <div className="header transition-item">
        <div className="header__item">
            <NavLink className="header__title" to='/projects' activeClassName="header__active" exact>
                <h1>Projects</h1>
            </NavLink>
        </div>
        <div>
            <NavLink className="header__title" to='/academics' activeClassName="header__active" exact>
                <h1>Academics</h1>
            </NavLink>
        </div>
        <div className="header__item">
            <NavLink className="header__title" to='/career' activeClassName="header__active" exact>
                <h1>Career</h1>
            </NavLink>
        </div>
    </div>
)}

Header.defaultProps = {
    title: 'Dashboard'
}



export default (Header);