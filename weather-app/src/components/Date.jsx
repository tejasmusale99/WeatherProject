import React, { useState, useEffect } from "react";

const LiveDateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval=setTimeout(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => {
        clearInterval(interval);
      };
  }, [currentDateTime]);

  return (
    <>
    <div className="date_time">
      <p> {currentDateTime.toLocaleDateString()}</p>
      <p> {currentDateTime.toLocaleTimeString()}</p>
    </div>
    </>
  );
};

export default LiveDateTimeComponent;
