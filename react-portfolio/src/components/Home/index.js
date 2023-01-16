import React from "react";

function Home () {
    
    return(
    <div className="columns" id="aboutMain">
        <div className="column is-one-fifth card">
            <div className="card-image">
                <figure className="image">
                    <img src={"https://bulma.io/images/placeholders/1280x960.png"} alt="placeholder" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image">
                            <img src={"https://bulma.io/images/placeholders/96x96.png"} alt="placeholder" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">Griz Carnitas</p>
                        <p className="subtitle is-6">@flavortopia</p>
                    </div>
                </div>
                
                <div className="content">
                    <ul>
                        <li>Fact 1</li>
                        <li>Fact 2</li>
                        <li>Fact 3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="column section">
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <p>Here is where I will tell you all about myself.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;