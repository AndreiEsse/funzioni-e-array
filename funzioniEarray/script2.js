// function Cresc(array) {
//     array.sort(function(a, b) {
//       return b - a;
//     });
//   }
  
//   let numcas = [7, 2, 10, 4, 8, 1, 6, 5, 3, 9];
//   Cresc(numcas);
  
//   console.log(numcas);
  
//   function Cresc(array2) {
//     array2.sort(function(a, b) {
//       return a - b;
//     });
//   }
  
//   let numcas2 = [2, 3, 9, 7, 8, 6, 1, 5, 4, 10, 11];
//   Cresc(numcas2);
  
//   console.log(numcas2);
let array = [];
function NumOrd(num) {
  for (let i = 0; i < num; i++) {
    array.push(Math.floor(Math.random() * (50 - (-50) + 1) + (-50)));
    array.sort((a, b) => b - a);
  }
     return array
}
console.log(NumOrd(10));