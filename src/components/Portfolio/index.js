import React from "react";

function Portfolio () {

    return(
    <div className="aboutMain">
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <button className="tile is-child">Project 1</button>
                <button className="tile is-child">Project 2</button>
            </div>
        </div>
        <div className="tile is-ancestor">
            <div className="tile is-parent is-1">
                <button className="tile is-child">Project 3</button>
            </div>
            <div className="tile is-vertical">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <div className="tile is-child box" id="MD">
                            <section className="section has-text-centered">
                                <h1 className="subtitle">Main Display</h1>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tile is-parent is-1">
                <button className="tile is-child">Project 4</button>
            </div>
        </div>
         
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <button className="tile is-child">Project 5</button>
                <button className="tile is-child">Project 6</button>
                </div>
        </div>
    </div>
    )
}

export default Portfolio;