import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Header = (props) => {
    const dropdown = () => {
        const x = document.getElementById("tabs");
        if (x.style.display === "flex") {
          x.style.display = "none";
        } else {
          x.style.display = "flex";
          x.style["alignItems"] = "flex-end";
          x.style["flexDirection"] = "column";
        }
    }
    return (
    <div className="navbars">
        <div className="desktop-navbar">
            <div className="header transition-item">
                <NavLink className="header__title" to='/' activeClassName="header__active" exact >
                <div className="my_img"> </div>
                </NavLink>
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
        </div>
        <div className="mobile-navbar">
            <div className="transition-item">
                <div className="header">
                    <NavLink className="header__title" to='/' activeClassName="header__active" exact >
                        <h1> Dashboard </h1>
                    </NavLink>
                    <a href="javascript:void(0);" className="icon" onClick={dropdown}>
                        <FaBars color="#364051" size="32"/>
                    </a> 
                </div>
                <div id="tabs">
                    <div className="header__item">
                        <NavLink onClick={dropdown} className="header__title" to='/projects' activeClassName="header__active" exact>
                            <h1>Projects</h1>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink onClick={dropdown} className="header__title" to='/academics' activeClassName="header__active" exact>
                            <h1>Academics</h1>
                        </NavLink>
                    </div>
                    <div className="header__item">
                        <NavLink onClick={dropdown} className="header__title" to='/career' activeClassName="header__active" exact>
                            <h1>Career</h1>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
)}

Header.defaultProps = {
    title: 'Dashboard'
}



export default (Header);