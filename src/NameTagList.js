import React from "react";
import NameTag from "./NameTag.js";
import "./styles.css";

const NameTagList = (props) => {
  const renderNameTag = (name, index) => (
    <NameTag
      name={name}
      key={name}
      removeName={props.removeName}
      index={index}
    />
  );

  const NameTagElements = Array.isArray(props.names)
  ? props.names.map(renderNameTag)
  : null;

  return (
    <main>
      {NameTagElements?.length > 0 ? NameTagElements : <p>No name tags yet!</p>}
    </main>
  );
};

export default NameTagList;
