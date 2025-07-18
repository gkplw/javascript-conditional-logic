let favoriteBooks = [];

function addFavoriteBook(bookName) {
  // Start coding here !
  if(bookName.includes("Beauty")){return favoriteBooks.push(bookName);}

} 

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);

// let result = [];

// function evenOrNot (numbers) {
//     if (numbers.includes("2")) {
//         result.push(numbers);
//     }
//     return result;
// }


// console.log(evenOrNot("11111"));
// console.log(evenOrNot("12345"));