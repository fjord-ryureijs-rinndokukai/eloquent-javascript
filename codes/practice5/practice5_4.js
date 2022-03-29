require('./script')


function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        if (!groupName(item)) continue;
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

function dominantDirection(text) {
    result = countBy(text, n => characterScript(n.codePointAt(0)))
    let max = { count: 0 }
    for (const el of result) {
        if (max.count < el.count) {
            max = el
        }
    }
    return max.name.direction
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
