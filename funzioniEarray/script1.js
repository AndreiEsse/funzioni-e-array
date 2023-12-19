let array = [];
function generator(num) {
    for (let i = 0; i < num; i++) {
        array.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    }
    return array 
}
console.log(generator(6));