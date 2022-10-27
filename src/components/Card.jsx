import React from "react";
import Main, { CardImg, CardTitle, Description } from "./styles/Card.styled";
import content from "../data";

const Card = () => {
  return (
    <>
      {content.map((item) => {
        const { body, id, image, title } = item;
        return (
          <Main key={id} id={id}>
            <div>
              <CardImg src={`./images/${image}`}></CardImg>
            </div>
            <div>
              <CardTitle>{title}</CardTitle>
              <Description>{body}</Description>
            </div>
          </Main>
        );
      })}
    </>
  );
};

export default Card;

