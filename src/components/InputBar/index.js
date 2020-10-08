import React from "react";

function InputBar(props) {
    return (
        <div className="control">
            <input
              onChange={props.handleInputChange}
              name="search"
              type="text"
              className="input"
              placeholder="Hinata Shoyo"
              id="name"
            />
        </div>
    );
}

export default InputBar;