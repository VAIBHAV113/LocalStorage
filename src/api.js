import React, { useState, useEffect } from "react";

function Api() {
  const [krutos, setKrutos] = useState();

  const getData = async () => {
    await fetch("https://panorbit.in/api/users.json")
      .then((response) => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setKrutos(json);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {krutos && krutos.map((date) => <div key={date.id}>{date.name}</div>)}
    </div>
  );
}

export default Api;
