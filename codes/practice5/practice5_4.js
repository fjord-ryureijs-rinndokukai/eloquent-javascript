require('./script')

function dominantDirection(text) {
    // Your code here.
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}
hello = 'helloみそしる'
// console.log(hello.split(''))
// Array.from('𝟘𝟙𝟚𝟛')をつかうこと
// 空白文字がエラーを出しているというところまで

console.log(countBy(hello.split(''), n => characterScript(n.codePointAt(0)).name))
// let m = 'a'
// console.log(characterScript(m.codePointAt(0)).name)
// console.log(characterScript(121));

// console.log(countBy([1, 2, 3, 4, 5, 6], n => n > 2));
// //=> [ { name: false, count: 2 }, { name: true, count: 4 } ]
//
// console.log(dominantDirection("Hello!"));
// // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// // → rtl
