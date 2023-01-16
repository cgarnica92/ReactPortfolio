import React from "react";

function Header(props) {

    return (
        <header className="hero is-primary">
            {props.children}
        </header>
    );
}

export default Header;