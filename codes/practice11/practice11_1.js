async function locateScalpel(nest) {
  // Your code here.
  let curr = null
  let next = network(nest)[0]

  while (true) {
    curr = next
    next = await anyStorage(nest, curr, 'scalpel')
    if (curr === next) return curr
  }
}

function locateScalpel2(nest) {
  let curr = nest.name
  const loop = () => anyStorage(nest, curr, 'scalpel').then((next) => (curr === next ? curr : loop(next)))
  loop(curr)
}

locateScalpel(bigOak).then(console.log)
// → Butcher Shop
