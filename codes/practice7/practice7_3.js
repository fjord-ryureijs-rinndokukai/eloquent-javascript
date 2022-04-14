class PGroup {
  static empty = new PGroup()

  constructor (values = []) {
    this.values = values
  }

  add(obj) {
    if (this.has(value)) return this
    return new PGroup([...this.values, obj])
  }

  delete(obj) {
    if (!this.has(value)) return this
    return new PGroup(this.values.filter((ele) => ele != obj))
  }

  has(obj) {
    return this.values.includes(obj)
  }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");


console.log(a.values)
console.log(ab.values)
console.log(b.values)
console.log(PGroup.empty)

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
