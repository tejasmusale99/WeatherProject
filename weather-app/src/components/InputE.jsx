import React, { useEffect, useState } from "react";
import Temp from "./Temp";
function InputE() {
  const [inputValue, setInputValue] = useState("Nashik");
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=16389ed3ca0c7fb57e81255ecce9520e`;
      const response = await fetch(fetchUrl);
      const resJson = await response.json();
      // console.log(resJson)
      setData(resJson.main);
    };
    // const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=16389ed3ca0c7fb57e81255ecce9520e`;
    // fetch(fetchUrl)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    fetchApi();
  }, [inputValue]);

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="Enter City Name"
          onChange={inputChangeHandler}
          className="input_area"
        />
      </div>

      {!data ? (
        <p>No Data Found </p>
      ) : (
        <>
          <div className="city-name">
          <i className="fa-solid fa-street-view fa-fade street_logo " ></i>
            <h1 className="city_heading">{inputValue}</h1>
          </div>  
          <div className="Temp">
            <Temp
              temp={data.temp}
              tempMin={data.temp_min}
              tempMax={data.temp_max}
            />
          </div>
        </>
      )}
    </>
  );
}

export default InputE;
