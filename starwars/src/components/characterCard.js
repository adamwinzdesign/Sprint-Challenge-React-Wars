import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import '../index.css';

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