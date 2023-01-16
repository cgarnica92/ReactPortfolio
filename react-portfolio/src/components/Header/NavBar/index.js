import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../../utils/helpers";

function NavBar(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
        }, [currentPage]);

    return (
        <nav className="navbar">
            <div className="navbar-brand" id="logo">
                <h1 className="title">Gris Carnitas</h1>
            </div>
            <ul className="navbar-menu">
            {pages.map((Page) => (
                <li
                    className={`navbar-item ${currentPage.name === Page.name && 'navActive'}`}
                    key={Page.name}
                >
                    <span
                        onClick={() => setCurrentPage(Page)}
                    >
                        {capitalizeFirstLetter(Page.name)}
                    </span>
                </li>
            ))}
            </ul>
        </nav>
    );
}

export default NavBar;