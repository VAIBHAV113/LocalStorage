import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
function Localstorage() {
  const [name, setName] = useLocalStorage('name','');

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Localstorage;
