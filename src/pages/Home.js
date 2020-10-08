import React, { useState, useEffect } from 'react';
import haikyuu from "../haikyuu.json";
import Title from '../components/Title';
import Card from '../components/Card';
import Hero from '../components/Hero';
import InputBar from '../components/InputBar';
import Filter from "../components/Filter";
import Field from '../components/Field';
import Container from '../components/Container';

function Home() {
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

  const mapCharacter = character => (
    <div className="column is-4">
      <Card
      character = {character}
      />  
    </div>
  );
  
  function useFilter(type, category) {
    useEffect(() => {
      const searchResults = allCharacters.filter(character => {
        console.log(character[category]);
        character[category].toLowerCase().includes(type)
      });
      
      setResults(searchResults);
    }, [type, allCharacters]);  
  }

  // filter by input search
  useFilter(search, "name");
  useFilter(filter, "position");
  useEffect(school, "school");

  return (
    <div>
      <Hero>
        <Title />
        <Field>
          <InputBar handleInputChange = {handleInputChange} />
          <br></br>
          <Filter category = "Position" options = {positions} filter={filterByTag}/>
          <Filter category = "School" options = {schools} filter = {filterBySchool} />
        </Field>
      </Hero>
      <Container>
        {results.length === 0 ? 
        allCharacters.map(mapCharacter)
        :
        results.map(mapCharacter)}
      </Container>
    </div>
  );
}

export default Home;