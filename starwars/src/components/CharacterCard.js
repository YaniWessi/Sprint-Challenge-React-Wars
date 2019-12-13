import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
const CharacterCard = props => {
  return (
    <card>
      <cardBody>
        <CardTitle>Character name:{props.name}</CardTitle>
        <CardText>{props.gender}</CardText>
        <Button>Button</Button>
      </cardBody>
    </card>
  );
};
export default CharacterCard;
