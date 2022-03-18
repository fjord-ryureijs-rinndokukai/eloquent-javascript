let obj = { here: { is: "an" }, object: 2 };

// valueに複数ネストしたものがある場合、正しく動かない
function deepEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  if (Object.values(obj1).some(value => typeof (value) === 'object' && value !== null)) {
    // 2つのObjectのネストした中が等価かどうか比べていく
    const key = Object.keys(obj1).filter(key => typeof obj1[key] === 'object')
    return deepEqual(obj1[key], obj2[key])
  } else {
    // 外側のプロパティが等しいかどうかを見る
    return Object.keys(obj1).every((key, idx) => key === Object.keys(obj2)[idx])
  }
}

// 模範解答 ↑での問題もクリア済み
function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
    b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}


console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1 }))
// → false
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(deepEqual(obj, { here: { is: "an" }, object: { is: "an" } }))
// → false
// 未対応
