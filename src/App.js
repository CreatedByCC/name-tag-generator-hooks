import React, { useEffect, useState } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

function App() {
  const savedNames = JSON.parse(localStorage.getItem("savedNames"));

  const [names, setNames] = useState(savedNames);

  function removeName(clickedIndex) {
    const newNames = names.filter((_, index) => index !== clickedIndex);
    setNames(newNames);
  }

  function addName(name) {
    const newNames = [name, ...names];
    setNames(newNames);
  }

  useEffect(() => {
    localStorage.setItem("savedNames", JSON.stringify(names));
  }, [names]);

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      <UserInput addName={addName} />
      <NameTagList names={names} removeName={removeName} />
    </div>
  );
}

export default App;
