import React from "react";
import PageContent from "../PageContent";
import Home from "../Home";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <Home />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <Home />;
        }
    };

    return(
        <section>
            <h2 className="hero title is-white" style={{paddingLeft: 25, paddingTop: 10, paddingBottom: 15, marginBottom:0,}}>{capitalizeFirstLetter(currentPage.name)}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}

export default Page;