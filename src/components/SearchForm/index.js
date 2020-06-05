import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="form-inline">
      <div className="form-group mb-2">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control mb-2"
          placeholder="Hinata Shoyo"
          id="name"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success mb-2">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
