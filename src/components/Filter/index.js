import React from "react";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const category = this.props.category;
        const options = this.props.options;
        const filter = this.props.filter;
        return(
        <div className="notification">
            <div className="subtitle">
                <h2>Filter by {category}</h2>
                <br></br>
                <div className="field is-grouped">
                {options.map(options => 
                <div key = {options} className="control">
                    <button className="button" onClick={filter} id={options}>{options}</button>
                </div>
                )}
                <button className="button" onClick={filter} id="">Clear</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Filter;