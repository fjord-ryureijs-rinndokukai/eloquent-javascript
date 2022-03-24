let arrays = [[1, 2, 3], [4, 5], [6]];

let result = arrays.reduce((previous, current) => {
    return previous.concat(current)
})

console.log(result)
// → [1, 2, 3, 4, 5, 6]
