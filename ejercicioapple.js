/* 
A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False. */

function fixedPoint(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === i) {
            return i
        } else {
            return false
        }
    }

}
let arr = [0, 34, 1]
console.log(fixedPoint(arr));

//un condicional, numero de posicion del array === numero en esa misma posicion

//dado este array:   let arr = [54,34,2]
//arr[2] === 2