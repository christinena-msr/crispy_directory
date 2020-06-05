import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import haikyuu from "./haikyuu.json";
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Card from './components/Card';
import SearchForm from './components/SearchForm';

function App() {
  
  const [search, setSearch] = useState("");
  const [allCharacters, setCharacter] = useState(haikyuu);
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("");
  const [school, setSchool] = useState("");

  const positions = ["Wing Spiker", "Middle Blocker", "Libero", "Setter"]

  const handleInputChange = e => setSearch(e.target.value);

  const filterByTag = e => setFilter(e.target.id);

  useEffect(() => {
    const searchResults = allCharacters.filter(character => 
      character.name.toLowerCase().includes(search)  
    );
    setResults(searchResults);
  }, [search, allCharacters]);

  useEffect(() => {
    const filterResults = allCharacters.filter(character =>
      character.position.includes(filter)
    );
    setResults(filterResults);
  }, [filter, allCharacters]);

  useEffect(() => {
    const schoolResults = allCharacters.filter(character =>
      character.school.includes(school));
    setResults(schoolResults);
  }, [school, allCharacters]);

  return (
    <div>
      <section class="hero is-medium is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Haikyuu Characters!
            </h1>
            <div className="field">
              <div className="control">
                <input
                  onChange={handleInputChange}
                  name="search"
                  type="text"
                  className="input"
                  placeholder="Hinata Shoyo"
                  id="name"
                />
              </div>
              <br></br>
              <div class="notification">
                <div class="subtitle">
                  <h2>Filter by Position</h2>
                  <br></br>
                  <div className="field is-grouped">
                    {positions.map(position => 
                    <div className="control">
                      <button className="button" onClick={filterByTag} id={position}>{position}</button>
                    </div>
                    )}
                    <button className="button" onClick={filterByTag} id="">Clear</button>
                  </div>
                </div>
              </div>
              <div class="notification">
                <div class="subtitle">
                  <h2>Filter by School</h2>
                  <br></br>
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button" onClick={e => setSchool("Karasuno")}>Karasuno</button>
                    </div>
                    <div className="control">
                      <button className="button" onClick={e => setSchool("Fukurodani")}>Fukurodani</button>
                    </div>
                    <div className="control">
                    <button className="button" onClick={e => setSchool("")}>Clear</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="columns is-multiline">
        {results.length === 0 ? 
          allCharacters.map(character => (
            <div className="column is-4">
              <Card
              key={character.id}
              name={character.name}
              image={character.url}
              position={character.position}
              number={character.number}
              height={character.height}
              school={character.school} 
              />  
            </div>
            
          ))
          :
          results.map(character => (
            <div className="column is-4">
            <Card
              key={character.id}
              name={character.name}
              image={character.url}
              position={character.position}
              number={character.number}
              height={character.height}
              school={character.school} 
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;