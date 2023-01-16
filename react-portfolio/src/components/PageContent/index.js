import React from "react";

const PageContent = (props) => {
    return(
        <div className="container" style={{backgroundColor: "white", paddingTop: 0}}>
            {props.children}
        </div>
    );
}

export default PageContent;