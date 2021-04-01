import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h2 className="secondary-header_card">{props.title}</h2>
      <p className="paragraph">{props.role}</p>
      <p className="paragraph">
        <strong>Description: </strong>
        {props.description}
      </p>
      <p className="paragraph">
        <strong>Environment: </strong>
        {props.environment}
      </p>
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
