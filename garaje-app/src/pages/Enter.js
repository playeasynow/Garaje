import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Home extends Component {

  render() {
    return (
      <div className="container-fluid enter-box">
        <div className="container text-center center-box">
          <Link className="garaje-box" to="/home">
            garaje
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
