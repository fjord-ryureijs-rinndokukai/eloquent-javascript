async function locateScalpel(nest) {
  // Your code here.
  let curr = null;
  let next = network(nest)[0];
  
  while (true) {
    console.log(`${curr} -> ${next}`);
    curr = next;
    next = await anyStorage(nest, curr, 'scalpel');
    if (curr === next) break;
  }
}

function locateScalpel2(nest) {
  // Your code here.
}

locateScalpel(bigOak).then(console.log);
// → Butcher Shop
