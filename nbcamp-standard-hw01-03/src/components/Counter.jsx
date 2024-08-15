import React from "react";

const Counter = (props) => {
  return (
    <>
      <button onClick={props.increment}>Increment</button>
      {props.count > 10 ? <p>"High count!"</p> : <p>"Keep counting..."</p>}
    </>
  );
};

export default Counter;
