document.addEventListener("DOMContentLoaded", function () {
  let catsArray = [
    "Ollie",
    "Sophie",
    "Salem",
    "Tiger",
    "Binx",
    "Pumpkin",
    "Penny",
    "Lenny",
  ];
  let dogsArray = [
    "Barney",
    "Molly",
    "Baxter",
    "Polly",
    "Buddy",
    "Suki",
    "Watson",
  ];
  let fruitsArray = [
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Plum",
    "Apricot",
  ];
  let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

  // --- Løs opgaverne herunder: Find element i catsArray'et med .find metoden ---
  // let hasBegheera = catsArray.find(function (cat) {
  //   return cat === "Begheera";
  // });
  // console.log(hasBegheera);

  // let hasSalem = catsArray.find(function (cat) {
  //   return cat === "Salem";
  // });
  // console.log(hasSalem);

  // Multiplicer alle tal i numbersArray med 3
  //   let numbermultiplier = numbersArray.map(function (number) {
  //     return number * 3;
  //   });

  //   console.log(numbermultiplier); // Udskriver det nye array med tal ganget med 3

  // console.log(dogsArray.join(", ")); // Udskriver alle elementer i dogsArray med komma og mellemrum
  // console.log(dogsArray.join("")); // Udskriver alle elementer i dogsArray uden komma og mellemrum

  // let fruitsindexOf = fruitsArray.indexOf("Mango")
  // console.log(fruitsindexOf); // Udskriver index nummeret for "Mango" i fruitsArray

//   let removeDogsArray = dogsArray.filter((dog) => dog !== "Polly");
//   console.log(removeDogsArray); // Udskriver et nyt array med alle elementer fra dogsArray undtagen "Polly"

  let samledeSum = numbersArray.reduce(function (totalNumber, number) {
    return totalNumber + number;
  });
    console.log(samledeSum); // Udskriver summen af alle tal i numbersArray
}); // ends DOMContentLoaded
