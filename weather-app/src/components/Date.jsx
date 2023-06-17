import React, { useState, useEffect } from "react";

const LiveDateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setCurrentDateTime(new Date());
    }, 1000);
  }, [currentDateTime]);

  return (
    <div>
      <p> {currentDateTime.toLocaleDateString()}</p>
      <p> {currentDateTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default LiveDateTimeComponent;
