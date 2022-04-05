class Group {
  constructor () {
    this.values = []
  }

  static from(obj) {
    const group = new Group()
    for (let element of obj) {
      group.add(element)
    }
    return group
  }

  add(value) {
    if (!this.has(value)) {
      this.values.push(value)
    }
  }

  has(value) {
    return this.values.includes(value)
  }

  delete(value) {
    this.values = this.values.filter(function(ele){
      return ele != value;
    });
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
