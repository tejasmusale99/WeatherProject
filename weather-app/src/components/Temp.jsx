import React from "react";

function Temp(props) {
  return (
    <>
    <div className="temp">
      <h1>{props.temp} Cel</h1>
      <h3 className="min_temp">
        Min:{props.tempMin} cel | Max: {props.tempMax} cel
      </h3>
      </div>
    </>
  );
}

export default Temp;
