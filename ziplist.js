"use strict";
const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];
function ziplist(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length && i < arr2.length; i++) {
        result.push([arr1[i], arr2[i]]);
    }
    return result;
}
console.log(ziplist(list1, list2));
function ziplistTheFunctionalWay(arr1 = [1, 2, 3], arr2 = ['a', 'b', 'c']) {
    return arr1.map((num, index) => [num, arr2[index]]).filter(pair => pair[1] !== undefined);
}
console.log(ziplistTheFunctionalWay(list1, list2));
