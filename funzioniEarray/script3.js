function countNum(num) {
    let numString = num.toString();
    let count = numString.length;
    return count
}
let numerone = Math.floor(Math.random() * (9999 - 1 + 1) + 1);
console.log(numerone);
let cifres = countNum(numerone);
console.log(`${cifres} cifra/e`);