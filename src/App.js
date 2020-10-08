import React, { useState, useEffect } from 'react';
import './App.css';
import haikyuu from "./haikyuu.json";
import Title from './components/Title';
import Card from './components/Card';
import Hero from './components/Hero';
import InputBar from './components/InputBar';
import Filter from "./components/Filter";
import Field from './components/Field';
import Container from './components/Container';

function App() {
  
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("");
  const [school, setSchool] = useState("");

  const allCharacters = haikyuu;
  const positions = ["Wing Spiker", "Middle Blocker", "Libero", "Setter"];
  const schools = ["Karasuno", "Fukurodani"];

  const handleInputChange = e => setSearch(e.target.value);

  const filterByTag = e => setFilter(e.target.id);
  const filterBySchool = e => setSchool(e.target.id);

  // const mapCharacter = character => (
  //   <div key={character} className="column is-4">
  //     <Card
  //     character = {character}
  //     />  
  //   </div>
  // );

  // filter by input search
  useEffect(() => {
    const searchResults = allCharacters.filter(character => 
      character.name.toLowerCase().includes(search));
    setResults(searchResults);
  }, [search, allCharacters]);

  // filter by player position
  useEffect(() => {
    const filterResults = allCharacters.filter(character =>
      character.position.includes(filter));
    setResults(filterResults);
  }, [filter, allCharacters]);

  // filter by school
  useEffect(() => {
    const schoolResults = allCharacters.filter(character =>
      character.school.includes(school));
    setResults(schoolResults);
  }, [school, allCharacters]);

  return (
    <div>
      <Hero>
        <Title />
        <Field>
          <InputBar handleInputChange = {handleInputChange} />
          <br></br>
          <Filter key = "Position" category = "Position" options = {positions} filter={filterByTag}/>
          <Filter key = "School" category = "School" options = {schools} filter = {filterBySchool} />
        </Field>
      </Hero>
      <Container>
        {results.length === 0 ? 
        allCharacters.map(character => (
          <div key={character.name} className="column is-4">
            <Card
            character = {character}
            />  
          </div>))
        :
        results.map(character => (
          <div key={character.name} className="column is-4">
            <Card
            character = {character}
            />  
          </div>))
          }
      </Container>
    </div>
  );
}

export default App;