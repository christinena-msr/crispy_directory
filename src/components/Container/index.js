import React from "react";

function Container(props) {
    return (
        <div className="container">
        <div className="columns is-multiline">
            {props.children}
        </div>
        </div>
    );
}

export default Container;