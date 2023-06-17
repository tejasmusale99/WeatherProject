import React from "react";
import InputE from "./InputE";
import LiveDateTimeComponentte from "./Date";

function Weather() {
  return (
    <>
      <div className="main_container">
        <div>
        <InputE />
        <div className="Date-Time">
          <LiveDateTimeComponentte />
        </div>
        </div>
      </div>
    </>
  );
}
export default Weather;
