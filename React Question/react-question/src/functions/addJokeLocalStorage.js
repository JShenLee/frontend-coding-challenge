const addJokeLocalStorage = (joke) =>{
    //Pull the current jokeHistory array. If it is empty, initialize an aray.
    var jokeList = JSON.parse(localStorage.getItem("jokeHistory") || "[]");
    //add current joke to the array.
    jokeList.push(joke);
    //"Put back" the array into localStorage
    localStorage.setItem("jokeHistory", JSON.stringify(jokeList));
}

module.exports = {addJokeLocalStorage}