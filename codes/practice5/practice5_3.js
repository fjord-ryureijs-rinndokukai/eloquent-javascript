function every(array, test) {
  for(let el of array) {
    if (!test(el)) {
      return false
    }
  }
  return true
}


function every2(array, test) {
  return !array.some(n => !test(n))
}

console.log(every([1, 3, 5], n => n < 10));
// // → true
console.log(every([2, 4, 16], n => n < 10));
// // → false
console.log(every([], n => n < 10));
// → true


// someは一つでもtrueがあったらtrueになっちゃう
// everyは全部trueだったらtrue 一個でもfalseだったらfalse

// let arr = [1,2,3,4,5]

// console.log(arr.some( n => n == 1 ))
