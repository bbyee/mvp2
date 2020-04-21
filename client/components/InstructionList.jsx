import React from "react";
//import in instruction entry?

const InstructionList = (props) => {
  console.log("props.instructions in instructionlist", props.instructions);
  return (
    <div>
      <ol>
        {props.instructions.map((step) => {
          return <li>{step.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default InstructionList;
