import { useEffect, useState } from "react";

function getValue(key, value) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  return value;
}
function useLocalStorage(key, value) {
  const [updatedValue, setUpdatedValue] = useState(() => {
    return getValue(key, value);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(updatedValue));
  }, [updatedValue]);
  return [updatedValue, setUpdatedValue];
}

export default useLocalStorage;
