import React from 'react';
import '../index.css';

const CharacterCard = props => {
  return (
    <div className = 'card-contain'>
      <h1>{props.character.name}</h1>
      <h2>Birth Year: {props.character.birth_year}</h2>
      <h2>Gender: {props.character.gender}</h2>
      {/* <h2>Home World: {props.character.homeworld}</h2> */}
    </div>
  )
}

export default CharacterCard;