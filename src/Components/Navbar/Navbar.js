import React, { useState } from 'react';

import './Navbar.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChartPie,
    faEnvelopeOpen,
    faBell,
    faCog,
    faDatabase,
    faComments,
    faCogs,
    faArrowAltCircleRight,
}
    from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
    const { handleToggle, handleSettings, settings } = props
    const [searchValue, setSearchValue] = useState("")

    const handleChange = event => {
        setSearchValue(event.target.value)
    }

    return (
        <nav className="navbar-theme navbar navbar-expand">
            <div className="sidebar-toggle d-flex mrt-2" onClick={handleToggle}>
                <i className="hamburger align-self-center"
                ></i>
            </div>
            <form className="form-inline-sidebar">
                <input
                    placeholder="Search datasets..."
                    type="text"
                    name="search"
                    value={searchValue}
                    onChange={handleChange}
                    className="form-control-lite form-control-sidebar" />
                <Link to={`/search/${searchValue}`} style={{ display: "none" }}>
                    <button type="submit" style={{ display: "none" }}>
                    </button>
                </Link>
            </form>
            <div className="collapse navbar-collapse">
                <ul className="ml-auto navbar-nav">
                    <li className="ml-lg-1 dropdown nav-item">
                        <button className="nav-icon dropdown-toggle position-relative nav-link">
                            <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" className="x-navbar-icons" />
                        </button>
                    </li>
                    <li className="ml-lg-1 dropdown nav-item">
                        <button className="nav-icon dropdown-toggle position-relative nav-link">
                            <FontAwesomeIcon icon={faBell} size="2x" className="x-navbar-icons" />
                        </button>
                    </li>
                    <li className="ml-lg-1 dropdown nav-item">
                        <button 
                        onClick={handleSettings}
                        className="nav-icon dropdown-toggle position-relative nav-link">
                            <FontAwesomeIcon
                                icon={faCog} size="2x" className="x-navbar-icons" />
                        </button>
                        <div tabIndex="-1" role="menu"
                            className={settings === true ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"}>
                            {/* dropdown açılması için üstteki div clasına show ekle  javascript ile */}
                            {/* <Link to="/marketData" tabIndex="0" role="menuitem" className="dropdown-item"> */}
                            <Link to="/overview" tabIndex="0" role="menuitem" className="dropdown-item">
                                <FontAwesomeIcon icon={faDatabase} className="align-middle mrt-2" />
                                Data Space
                            </Link>
                            {/* <Link to="/contact" tabIndex="0" role="menuitem" className="dropdown-item"> */}
                            <Link to="/overview" tabIndex="0" role="menuitem" className="dropdown-item">
                                <FontAwesomeIcon icon={faComments} className="align-middle mrt-2" />
                                Contacts
                            </Link>
                            <Link to="/overview" tabIndex="0" role="menuitem" className="dropdown-item">
                                <FontAwesomeIcon icon={faChartPie} className="align-middle mrt-2" />
                                Overview
                            </Link>
                            {/* <Link to="/settings" tabIndex="0" role="menuitem" className="dropdown-item"> */}
                            <Link to="/overview" tabIndex="0" role="menuitem" className="dropdown-item">
                                <FontAwesomeIcon icon={faCogs} className="align-middle mrt-2" />
                                Settings
                            </Link>
                            <div tabIndex="-1" className="dropdown-divider"></div>
                            <Link to="/logout" tabIndex="0" role="menuitem" className="dropdown-item">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} className="align-middle mrt-2" />
                                Sign out
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
