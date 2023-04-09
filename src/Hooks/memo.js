import React, { useMemo, useState } from "react";

function Memo() {
  const [inc, setInc] = useState(0);
  const [sec, setSec] = useState(0);

   const value  = useMemo(() => {
    function handleCounter() {
      let i;
      for (i = 0; i < 2000000; i++) {
        setInc(inc + 1);
      }
    }
  });



  function handleCounter1() {
    setSec(sec + 1);
  }

  return (
    <div>
      <div>
        <button onClick={value}>
          Increment 1<span>Increment:${inc}</span>
        </button>
      </div>
      <div>
        <button onClick={handleCounter1}>
          Increment 2<span>Increment second:${sec}</span>
        </button>
      </div>
    </div>
  );
}

export default Memo;
