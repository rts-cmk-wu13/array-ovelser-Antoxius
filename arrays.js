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
//   let hasBegheera = catsArray.find(function (cat) {
//     return cat === "Begheera";
//   });
//   console.log(hasBegheera);

  let hasSalem = catsArray.find(function (cat) {
    return cat === "Salem";
  });
  console.log(hasSalem);
}); // ends DOMContentLoaded
