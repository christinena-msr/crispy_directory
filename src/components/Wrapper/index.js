import React from "react";

function Wrapper(props) {
    return <div className ="container-sm">{props.children}</div>
}

export default Wrapper;