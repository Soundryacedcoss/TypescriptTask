import React, { useState } from "react";
// DEfing props type of random number
type RandomeNumber = number
export const RandomeFunctional = () => {
  // defining value in usestate
const [value, setValue] = useState< RandomeNumber | 0>(0);
  const ShowHandler = () => {
    let RandomeNumber = Math.floor(Math.random() * 10 +1 );
    console.log(RandomeNumber);
    setValue(RandomeNumber);
  };
  if (value > 5) {
    throw new Error("")
  }
  return (
    <div>
      <p>{value}</p>
      <button className="button" onClick={ShowHandler}>Show</button>
    </div>
  );
};
