let obj = {here: {is: "an"}, object: 2};

function deepEqual(obj1, obj2) {
  result = []
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  else {
    for (let i = 0; i < Object.keys(obj1).length; i++) {
      result.push(Object.keys(obj1)[i] === Object.keys(obj2)[i])
    }
    return result.every(e => e)
  }
}

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1}))
// → false
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
