import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server";
import React from "react";

const Paragraph = (props) => {
  return <p className="paragraph">{props.children}</p>;
};

export default Paragraph;
