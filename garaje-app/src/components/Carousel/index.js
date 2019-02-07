import React from "react";
import GarajePic1 from "../../images/garaje-1.png"
import GarajePic2 from "../../images/garaje-3.png"
import GarajePic3 from "../../images/garaje-5.png"
import "./style.css";

function Carousel() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="10000">
                    <img src={GarajePic1} className="d-block w-100 carousel-pics" alt="main space" />
                    <div className="carousel-caption" id="caption-1">
                        <h1 className="caption-shadow">new coffee shop</h1>
                        <h1 className="caption-shadow">hondu-colombiano eats</h1>
                        <h1 className="caption-shadow">community learning space</h1>
                        <h1 className="welcome-garaje">welcome to garaje</h1>
                    </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                    <img src={GarajePic3} className="d-block w-100 carousel-pics" alt="people hanging out" />
                    <div className="carousel-caption" id="caption-2">
                        <h5>HELLO</h5>
                        <p>how's it going?</p>
                    </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                    <img src={GarajePic2} className="d-block w-100 carousel-pics" alt="main space" />
                    <div className="carousel-caption" id="caption-3">
                        <h5>HELLO</h5>
                        <p>how's it going?</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;