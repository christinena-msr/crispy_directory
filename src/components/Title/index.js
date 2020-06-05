import React from "react";

function Title(props) {
    return (
        <div className="jumbotron jumbrotron-fluid">
            <h1 className="display-4">{props.children}</h1>
        </div>)
}

export default Title;