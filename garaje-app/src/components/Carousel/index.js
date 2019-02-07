import React from "react";
import GarajePic1 from "../../images/garaje-1.png"
import GarajePic2 from "../../images/garaje-3.png"
import GarajePic3 from "../../images/garaje-5.png"
import GarajeIcon from "../../images/garaje-logo.png"
import "./style.css";

function Carousel() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="6000">
                    <img src={GarajePic1} className="d-block w-100 carousel-pics" alt="main space" />
                    <div className="carousel-caption" id="caption-1">
                        <h1 className="caption-shadow">new coffee shop</h1>
                        <h1 className="caption-shadow">hondu-colombiano eats</h1>
                        <h1 className="caption-shadow">community learning space</h1>
                        <h1 className="welcome-garaje"><i><b>welcome to garaje</b></i></h1>
                        <img src={GarajeIcon} className="garaje-icon" alt="main space" />
                    </div>
                </div>
                <div className="carousel-item" data-interval="6000">
                    <img src={GarajePic3} className="d-block w-100 carousel-pics" alt="people hanging out" />
                    <div className="carousel-caption" id="caption-2">
                        <h1 className="welcome-garaje"><i><b>coffee and food</b></i></h1>
                        {/* <h1 className="caption-shadow">new coffee shop</h1>
                        <h1 className="caption-shadow">hondu-colombiano eats</h1>
                        <h1 className="caption-shadow">community learning space</h1> */}
                        <div className="light-menu mt-3">
                            <div className="row">

                                <div className="col">
                                    <div className="list-group menu-bg">
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Cafe con Leche</h5>
                                            </div>
                                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Horchata Cold Brew</h5>
                                            </div>
                                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Chocolate Santafereño</h5>
                                            </div>
                                            <p className="mb-1">This steamy concoction features a salty, melted surprise at the bottom of the mug: white cheese.</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="list-group menu-bg">
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Avocado Tostones</h5>
                                            </div>
                                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Fried Yucca Pops + Crema Fresca</h5>
                                            </div>
                                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Guacamole + Plaintain Chips</h5>
                                            </div>
                                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-interval="6000">
                    <img src={GarajePic2} className="d-block w-100 carousel-pics" alt="main space" />
                    <div className="carousel-caption" id="caption-3">
                        <h1 className="welcome-garaje"><i><b>community space</b></i></h1>
                        <h1 className="caption-shadow">new coffee shop</h1>
                        <h1 className="caption-shadow">hondu-colombiano eats</h1>
                        <h1 className="caption-shadow">community learning space</h1>
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