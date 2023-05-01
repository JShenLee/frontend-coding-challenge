import React, { useEffect,useState } from "react";
import { addJokeLocalStorage } from "../functions/addJokeLocalStorage";
import AddJoke from "./AddJoke";
export default function Dashboard() {
    
    const [joke, setJoke] = useState("");

    async function fetchJoke() {
        const response = await fetch("https://icanhazdadjoke.com/", {
            method: 'GET',
            headers: {
                Accept: "application/json",
            },
        });
        const data = await response.json();
        const joke = data.joke;
        console.log(joke);
        //Set state of joke to be displayed on screen.
        setJoke(joke);
        addJokeLocalStorage(joke);
    }
       

    //Grab a joke from the api when component mounts (or window loads)
    useEffect(() => {
         fetchJoke();
         console.log('hello')
      },[]);


  return( 
  <div>
    Dashboard
    <button onClick={fetchJoke}>Refresh</button>
    <br/>
    <br/>
    <div>{joke}</div>
    <br/>
    <AddJoke/>
    <br/>
    
    </div>
    );
}
