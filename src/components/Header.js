import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({startLogout}) => (
    <div className = "header">
        <div className = "content-container">
            <div className = "header__content">
                <Link className = "header__title" to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
                <button className = "button button--link" onClick = {startLogout}>Logout</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
