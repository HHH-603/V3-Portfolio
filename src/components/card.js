import React from "react";
import Paragraph from "./paragraph";
import SecondaryHeader from "./secondary-header";

const Card = (props) => {
  return (
    <div className="card">
      <SecondaryHeader>{props.title}</SecondaryHeader>
      <Paragraph>
        <strong>Role: </strong>
        {props.role}
      </Paragraph>
      <Paragraph>
        <strong>Description: </strong>
        {props.description}
      </Paragraph>
      <Paragraph>
        <strong>Environment: </strong>
        {props.environment}
      </Paragraph>
      <ul className="list_card">
        <li className="list-item_card">
          &#9724; <italic>{props["summary-one"]}</italic>
        </li>
        <li className="list-item_card">
          &#9724; <italic>{props["summary-two"]}</italic>
        </li>
      </ul>
      <div className="container_card-links">
        <a className="link_card" href={props.deployed}>
          View Live
        </a>
        <a className="link_card" href={props.repository}>
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default Card;
