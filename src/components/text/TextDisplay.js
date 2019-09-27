import React from "react";

const TextDisplay = props => {
  return (
    <div className="text" style={{ textAlign: "center" }}>
      {props.text}
    </div>
  );
};

export default TextDisplay;
