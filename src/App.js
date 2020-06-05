import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import haikyuu from "./haikyuu.json";
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Card from './components/Card';
import SearchForm from './components/Search';

class App extends Component {
  state = {
    haikyuu
  };

  render() {
    return (
      <div>
        <Title>Haikyuu Characters!</Title>
        <Wrapper>
          <SearchForm />
          {this.state.haikyuu.map(character => (
            <Card
              key={character.id}
              name={character.name}
              image={character.url}
              position={character.position}
              number={character.number}
              height={character.height}
              school={character.school} 
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;