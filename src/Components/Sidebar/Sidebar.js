import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faViruses
}
    from "@fortawesome/free-solid-svg-icons";

import './Sidebar.css';

class Sidebar extends React.Component {

    render() {
        return (
            <nav
                className={this.props.toggle === true ? "sidebar toggled" : "sidebar"}>
                <div className="sidebar-content">
                    <Link className="sidebar-brand-logo" to="/">
                        <span className="align-middle">Usespace</span>
                    </Link>
                    <div className="sidebar-user-container">
                        <div className="font-weight-bold">Dashboards</div>
                    </div>
                    <ul className="sidebar-navigator">
                        <li>
                            <Link
                                className="sidebar-link"
                                to="/covid19">
                                <FontAwesomeIcon icon={faViruses} fixedWidth color="#153d78" className="align-middle mrt-2" />
                                <span
                                    className="align-middle"
                                >Covid-19</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Sidebar

// const mapStateToProps = state => ({
//     user: state.auth.user
// })

// export default connect(mapStateToProps)(Sidebar)