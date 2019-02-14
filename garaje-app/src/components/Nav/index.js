import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import "./style.css";

const Nav = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavAuth /> : <NavNonAuth />}
        </AuthUserContext.Consumer>
    </div>
);

class NavAuth extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }
        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnMount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container pl-0">
                    <Link className="navbar-brand" to="/home">
                        <div className="logo">garaje</div>
                    </Link>
                    <button
                        onClick={this.toggleNav}
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="find a course" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark" type="button" id="button-addon2">search</button>
                        </div>
                    </div>

                    <div className={`${this.state.open ? "" : "collapse "}navbar-collapse justify-content-end`}>
                        <ul className="nav">

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/home"
                                >
                                    <h4 className="roboto-font">categories</h4>
                                </Link>
                            </li>

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/home"
                                >
                                    <h4 className="roboto-font">cafe menu</h4>
                                </Link>
                            </li>

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/home"
                                >
                                    <h4 className="roboto-font">my account</h4>
                                </Link>
                            </li>

                            <li className="nav-item mt-2">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/"
                                >
                                    <SignOutButton />
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

class NavNonAuth extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }
        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnMount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {

        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <div className="container pl-0">
                    <Link className="navbar-brand mt-1" to="/home">
                        <div className="logo">garaje</div>
                    </Link>
                    <button
                        onClick={this.toggleNav}
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="input-group mt-2">
                        <input type="text" className="form-control" placeholder="find a course" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark" type="button" id="button-addon2">search</button>
                        </div>
                    </div>
                    
                    <div className={`${this.state.open ? "" : "collapse "}navbar-collapse justify-content-end`}>
                        <ul className="nav">

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/home"
                                >
                                    <h4 className="roboto-font">categories</h4>
                                </Link>
                            </li>

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/home"
                                >
                                    <h4 className="roboto-font">cafe menu</h4>
                                </Link>
                            </li>

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/home"
                                >
                                    <h4 className="roboto-font">login</h4>
                                </Link>
                            </li>

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/home"
                                >
                                    <h4 className="roboto-font">sign up</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Nav;