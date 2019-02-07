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
                <div className="carousel-item active" data-interval="10000">
                    <img src={GarajePic1} className="d-block w-100 carousel-pics" alt="main space" />
                    <div className="carousel-caption" id="caption-1">
                        <h1 className="caption-shadow">new coffee shop</h1>
                        <h1 className="caption-shadow">hondu-colombiano eats</h1>
                        <h1 className="caption-shadow">community learning</h1>
                        <h1 className="welcome-garaje"><i><b>welcome to garaje</b></i></h1>
                        <img src={GarajeIcon} className="garaje-icon" alt="main space" />
                    </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                    <img src={GarajePic3} className="d-block w-100 carousel-pics" alt="people hanging out" />
                    <div className="carousel-caption" id="caption-2">
                        <h1 className="welcome-garaje"><i><b>coffee and food</b></i></h1>
                        <div className="light-menu mt-3">
                            <div className="row">

                                <div className="col">
                                    <div className="list-group menu-bg">
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Cafe con Leche</h5>
                                            </div>
                                            <p className="mb-1">Equal parts hot coffee, and hot or steamed milk. Make it the Latin variation and use condensed milk!</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Horchata Cold Brew</h5>
                                            </div>
                                            <p className="mb-1">Not your ordinary cold brew. We add our homemade horchata recipe into the mix, and top it off with cinnamon.</p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Chocolate Santafereño</h5>
                                            </div>
                                            <p className="mb-1">This steamy hot chocolate concoction features a savory, melted surprise at the bottom of the mug: white cheese.</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="list-group menu-bg">
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Avocado Tostones</h5>
                                            </div>
                                            <p className="mb-1">Tostones are twice-fried plantain slices. Pair that savory crunch with the smoothness of a ripe avocado. </p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Fried Yucca Pops + Crema Fresca</h5>
                                            </div>
                                            <p className="mb-1">Yuca, a.k.a. cassava root, air-fried cripsy and delicious. Dip the bite-sized potato-substitue into our fresh cream sauce. </p>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action menu-text default">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 heading">Guacamole + Plaintain Chips</h5>
                                            </div>
                                            <p className="mb-1">Look, we make the best guacamole. It has BANANAS in it. We dare you to eat it with our banana chips (pictured). We're not kidding.</p>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                    <img src={GarajePic2} className="d-block w-100 carousel-pics" alt="main space" />
                    <div className="carousel-caption" id="caption-3">
                        <h1 className="welcome-garaje"><i><b>community learning</b></i></h1>
                        <h3 className="caption-shadow">garaje's mission is to empower people to learn, grow and thrive</h3>
                        <h3 className="caption-shadow">we want you to work on your personal projects with us</h3>
                        <h3 className="caption-shadow">that's why we offer online video courses in web development, <br></br>creative writing and music composition, with more to come.</h3>
                        <div className="row mt-5 text-center">
                            <div className="col">
                                <i className="fas fa-user-plus iconic2 mb-3"></i> <br></br>
                                sign up for free to create an account <br></br>and save your course progress
                            </div>
                            <div className="col">
                                <i className="fas fa-hand-pointer iconic2 mb-3"></i> <br></br>
                                review course summaries and select a <br></br>course-track you are interested in
                            </div>
                            <div className="col">
                                <i className="fas fa-atom iconic2 mb-3"></i><br></br>
                                learn in our space, or access the site <br></br>from the comfort of your own home!
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;