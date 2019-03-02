import React, { Component } from "react";
import scrollToComponent from 'react-scroll-to-component';
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import FeaturedCourses from "../components/FeaturedCourses";
import "./style.css";

class Home extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  constructor(props) {
    super(props);
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
  }

  componentDidMount() {
    scrollToComponent(this.Top, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
    window.addEventListener("resize", this.updateWidth);
  }

  scrollToTopWithCallback() {
    scrollToComponent(this.Top, { offset: 0, align: 'middle', duration: 500, ease: 'inQuad' });
  }

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    this.setState(newState);
  };

  render() {
    return (
      <Container>
        <Nav />
        <Row>
          <Col size="md-12">
            <div id="first-row">
                <Carousel />
                <FeaturedCourses />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
