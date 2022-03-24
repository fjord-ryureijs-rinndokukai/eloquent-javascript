// Your code here.
function loop(num, test, update, body) {
    if (!test(num)) return
    body(num)
    num = update(num)
    loop(num, test, update, body)
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
