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

  // --- Løs opgaverne herunder ---

//   opg 1 Find og udskriv alle tal over 20 i numbersArray
  let NewNumbers = numbersArray.filter(function (number) {
    return number > 20;
  });

//   opg 2 tilføj og udskriv nyt element til catsArray
  //   console.log(NewNumbers);
  catsArray.push("Garfield");
  console.log(catsArray);

//   opg 3 A
// check for specifict element i arrayet og tjek for (true/false)
    let includesTrixie = dogsArray.includes("Trixie");
    console.log(includesTrixie);

//   opg 3 B
// check for specifict element i arrayet og tjek for (true/false)
    let includesBaxter = dogsArray.includes("Baxter");
    console.log(includesBaxter);
}); // ends DOMContentLoaded
