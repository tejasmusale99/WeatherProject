import React from "react";
import InputE from "./InputE";
import LiveDateTimeComponentte from "./Date";

function Weather() {
  return (
    <>
    <div className="container">
      <div className="weather">
        <InputE />
      </div>
      <div className="Date Time">
        <LiveDateTimeComponentte />
      </div>
      </div>
    </>
  );
}
export default Weather;
