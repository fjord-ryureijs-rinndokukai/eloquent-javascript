// Your code here (and the code from the previous exercise)
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
            return ele != value
        })
    }

    [Symbol.iterator]() {
        return new GroupIterator(this)
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0
        this.group = group
    }

    next() {
        if (this.index === this.group.values.length) return {done: true}

        let result = {value: this.group.values[this.index], done: false}
        this.index++
        return result
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c
