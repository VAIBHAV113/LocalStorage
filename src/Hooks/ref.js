import React, { useRef } from "react";

function Hook() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.value = 10000;
    inputRef.current.style.color = "red";
    // inputRef.current.style.display = "none";
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Handle Submit</button>
    </div>
  );
}

export default Hook;
