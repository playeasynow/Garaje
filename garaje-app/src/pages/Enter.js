import React, { Component } from "react";
// import scrollToComponent from 'react-scroll-to-component';
// import Jumbotron from "../components/Jumbotron";
// import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import "./style.css";

class Home extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  // constructor(props) {
  //   super(props);
  //   // this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
  // }

  // componentDidMount() {
  //   scrollToComponent(this.Top, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
  //   window.addEventListener("resize", this.updateWidth);
  // }

  // scrollToTopWithCallback() {
  //   scrollToComponent(this.Top, { offset: 0, align: 'middle', duration: 500, ease: 'inQuad' });
  // }

  // updateWidth = () => {
  //   const newState = { width: window.innerWidth };

  //   if (this.state.open && newState.width > 991) {
  //     newState.open = false;
  //   }
  //   this.setState(newState);
  // };

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
