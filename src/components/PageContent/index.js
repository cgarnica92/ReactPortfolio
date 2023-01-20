import React from "react";

const PageContent = (props) => {
    return(
        <div className="container" id="mainContainer" style={{backgroundColor: "black"}}>
            {props.children}
        </div>
    );
}

export default PageContent;