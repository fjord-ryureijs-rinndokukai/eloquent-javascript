class Group {
  constructor () {
    this.values = []
  }
  static from(obj) {
    for (let element of obj) {
      this.values.push(element)
    }
  }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false