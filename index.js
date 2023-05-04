

function bisiesto(num) {
    if (num % 100 === 0 && num % 400 !== 0) {
        return false
    } else if (num % 4 === 0 || num % 400 === 0) {
        return true
    } else {
        return false
    }
}

console.log(bisiesto(400));
console.log(bisiesto(404));
console.log(bisiesto(44));
console.log(bisiesto(4));
console.log(bisiesto(100));
console.log(bisiesto(104));









/*
bisiestos son divisibles entre 4
bisiestos no son divisibles entre 100 excepto 400
*/