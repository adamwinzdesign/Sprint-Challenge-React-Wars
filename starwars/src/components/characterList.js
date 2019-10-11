import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';

import CharacterCard from './characterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response);
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className = 'list-contain'>
      <h1>Significant Characters:</h1>

      {characters.map((character, index) => {
        return <CharacterCard key={index} character={character} />
      })}
    </div>
  )
}

export default CharacterList;