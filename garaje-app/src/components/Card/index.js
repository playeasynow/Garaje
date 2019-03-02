import React from "react";
import "./style.css";

function Card() {
    return (
        <div>
            <div className="card-group">
                <div className="card m-2">
                    <img src="https://images.unsplash.com/photo-1535979014625-490762ceb2ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Music Production with Ableton Live</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-2">
                    <img src="https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Intro to Web Development</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-2">
                    <img src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Intro to Web Design</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div className="card-group">
                <div className="card m-2">
                    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Creative Writing Practice</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-2">
                    <img src="https://images.unsplash.com/photo-1457464901128-7608dc7561ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Intro to Photoshop</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-2">
                    <img src="https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Intro to Prototyping</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Card;