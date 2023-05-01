/**
 * Vog App Developers
 * Frontend Recruiting Challenge - Javascript Question
 * Julian Lee
 */
const people = [
  {
    firstName: "Teddy",
    lastName: "Turner",
    age: 35,
  },
  {
    firstName: "Kat",
    lastName: "Bates",
    age: 34,
  },
  {
    firstName: "Susan",
    lastName: "Sommers",
    age: 52,
  },
  {
    firstName: "Bill",
    lastName: "Baggins",
    age: 111,
  },
  {
    firstName: "Zoe",
    lastName: "Deschanel",
    age: 25,
  },
];


const ageCheck = (people) => {
  //Initialize array for people who are age 35 years or older.
  let peopleList = [];
  people.forEach((person) => {
    if (person.age >= 35) {
      //Add people who meet the requirement (age 35 years or older)
      peopleList.push(person);
    }
  });

  //sort() compares two values in the list. If a.lastName > b.lastName, a positive value will be returned and the list will be mutated accordingly and vice versa.

  /**let sortedList= peopleList.sort((a,b) => (a.lastName-b.lastName)); //Tried this.
   * It wouldn't work because subtracting strings gives NaN rather than ASCII value.
   * See below for the function compare(a,b), which returns the numeric value for sort()
   */
  var sortedList = peopleList.sort(compare);

  sortedList.forEach((person) => {
    console.log(
      `${person.firstName} ${person.lastName} is ${person.age} years old`
    );
  });
};


const compare = (a, b) => {
  //Compare last names and sort.
  if (a.lastName > b.lastName) {
    return 1;
  } else if (a.lastName < b.lastName) {
    return -1;
  } else {
    //In this case, the last names are EQUAL, so we compare first names and continue sorting.
    if (a.firstName > b.firstName) {
      return 1;
    } else if (a.firstName < b.firstName) {
      return -1;
    } else {
      return 0;
    }
  }
};

ageCheck(people);
//Bill Baggins is 111 years old.
//Susan Sommers is 52 years old.
//Teddy Turner is 35 years old.
