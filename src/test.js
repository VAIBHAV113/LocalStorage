import React from "react";
import { useState } from "react";
import useTitleCount from "./useTitleCount";

function Test() {
  const [Count, setCount] = useState(0);
  useTitleCount({ Count });
  return (
    <div>
      <button onClick={() => setCount(Count + 1)}>Click Here</button>
      <div>{Count}</div>
    </div>
  );
}

export default Test;
