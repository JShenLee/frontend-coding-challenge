import React, { useState } from "react";
import { addJokeLocalStorage } from "../functions/addJokeLocalStorage";
import History from "./History";

export default function AddJoke() {
  const [newJoke, setNewJoke]= useState("");

  //addJokeLocalStorage and clear the input field when submitting a new joke.
  const handleAddJoke = () => {
    addJokeLocalStorage(newJoke);
    setNewJoke(""); // clear the input field
  };

  return (
    <div>
      Add Joke
       <input
                // className='form-input'
                type='text'
                name='newJoke'
                placeholder='Enter your own joke'
                value={newJoke}
                onChange={e => setNewJoke(e.target.value)}             
              />
      <button onClick={handleAddJoke}>Add</button>
      <History/>
    </div>
    
  );
}
