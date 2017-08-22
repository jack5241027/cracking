function (a, b) {
  if (!a || !b) return [];
  let i = b.length - 1;
  let aIndex = a.length - 1;
  let bIndex = a.length - 1;
  while (aIndex >= 0 && bIndex >= 0) {
    if (b[bIndex] > a[aIndex]) {
      b[i] = b[bIndex];
      bIndex--;
    } else {
      b[i] = a[aIndex];
      aIndex--;
    }
    i--;
  }

  while (aIndex >= 0) {
    b[i] = a[aIndex];
    i--;
    aIndex--;
  }
}

/*
Tips:
array 往前看不行，往後看，再從中間
if 判斷太多時，用 while

a = [1, 2, 3, 4]
b = [3, 5, 7, 9, 0, 0, 0, 0]

a = [1, 2, 3, 4]
b = [3, 5, 7, 9, 0, 0, 0, 9]

a = [1, 2, 3, 4]
b = [3, 5, 7, 9, 0, 0, 7, 9]

a = [1, 2, 3, 4]
b = [3, 5, 7, 9, 0, 5, 7, 9]

a = [1, 2, 3, 4]
b = [3, 5, 7, 9, 4, 5, 7, 9]

a = [1, 2, 3, 4]
b = [3, 5, 7, 3, 4, 5, 7, 9]

a = [1, 2, 3, 4]
b = [3, 5, 3, 3, 4, 5, 7, 9]

a = [1, 2, 3, 4]
b = [3, 2, 3, 3, 4, 5, 7, 9]

a = [1, 2, 3, 4]
b = [1, 2, 3, 3, 4, 5, 7, 9]


1. 判斷 undefined
2. 試著解說寫法(不急著寫 code and 說明 時間/空間複雜度)
3 for loop 的跳出條件 === while 的進入條件 and custom counter

*/