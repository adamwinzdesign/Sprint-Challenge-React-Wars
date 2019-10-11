import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import '../index.css';

// const CharacterCard = props => {
//   return (
//     <div className = 'card-contain'>
//       <h1>{props.character.name}</h1>
//       <h2>Birth Year: {props.character.birth_year}</h2>
//       <h2>Gender: {props.character.gender}</h2>
//       {/* <h2>Home World: {props.character.homeworld}</h2> */}
//     </div>
//   )
// }

const CharacterCard = props => {
  return (
    <div className = 'card-contain' key = '{props.id}'>
      <Card body inverse color="dark">
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
          <CardText>Birth Year: {props.character.birth_year}</CardText>
          <CardText>Gender: {props.character.gender}</CardText>
        </CardBody>
      </Card>

    </div>
  )
}

export default CharacterCard;