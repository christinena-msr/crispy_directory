import React, { Component } from "react";
import haikyuu from "../haikyuu.json";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    characters: haikyuu,
    results: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ ... state, search: event.target.value });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.state.characters.map.filter(character => this.state.search);
  //   // API.getDogsOfBreed(this.state.search)
  //   //   .then(res => {
  //   //     if (res.data.status === "error") {
  //   //       throw new Error(res.data.message);
  //   //     }
  //   //     this.setState({ results: res.data.message, error: "" });
  //   //   })
  //   //   .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleSearch={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
