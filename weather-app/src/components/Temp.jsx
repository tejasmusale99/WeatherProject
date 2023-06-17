import React from "react";

function Temp(props) {
  return (
    <>
      <p>{props.temp}</p>
      <p>
        Min:{props.tempMin} cel | Max: {props.tempMax} cel
      </p>
    </>
  );
}

export default Temp;
