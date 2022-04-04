// Your code here.
class Vec {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y)
  }

  minus(vector){
    return new Vec(this.x - vector.x, this.y - vector.y)
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5