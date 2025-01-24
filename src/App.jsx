import React, { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppy) {
    setFeatPupId(puppy.id);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <h1>Puppy List</h1>
      {!featPupId && <h2>Click a puppy to show the deets!</h2>}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p onClick={() => handleClick(puppy)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
