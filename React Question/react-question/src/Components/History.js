import React from "react";

export default function History() {


  const [showResults, setShowResults] = React.useState(false)
  const showHide = () => {
    if(showResults){
    setShowResults(false)
    }else {
    setShowResults(true)
    }
  }

//The joke list comes back as a large string if it isn't processed.
//Map through the array in an unordered<ul> list.
var jokeList = JSON.parse(localStorage.getItem("jokeHistory") || "[]");

const Results = () => (
  <div id="results" className="search-results">
      <ul>

        {jokeList.map((joke,index) => (
          <li key={index}>{joke}</li>
        ))}
      </ul>
</div>
)

  return (
    <div>
      <div className="jokeHistory">
      <input type="submit" value="History" onClick={()=>showHide()} />
      {/* Conditional rendering */}
      { showResults ? <Results /> : null }
      </div>
    </div>
  );


  
}

