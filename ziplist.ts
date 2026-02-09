const list1: number[] = [1, 2, 3];
const list2: string[] = ['a', 'b', 'c'];

function ziplist(arr1: number[], arr2: string[]) {
  const result: [number, string][] = [];
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}

console.log(ziplist(list1, list2));

function ziplistTheFunctionalWay(arr1: number[] = [1, 2, 3], arr2: string[] = ['a', 'b', 'c']) {
  return arr1.map((num, index) => [num, arr2[index]]).filter(pair => pair[1] !== undefined);
}

console.log(ziplistTheFunctionalWay(list1, list2));
