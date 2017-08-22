function insetToC(a, b, c) {
  if (!c || !a || !b) return [];
  let aIndex = 0;
  let bIndex = 0;
  c.forEach(function(e, cIndex) {
    if (bIndex === a.length) {
      c[cIndex] = a[aIndex];
      aIndex++;
    } else if (aIndex === a.length) {
      c[cIndex] = b[bIndex];
      bIndex++;
    } else {
      if (a[aIndex] > b[bIndex]) {
        c[cIndex] = b[bIndex];
        bIndex++;
      } else {
        c[cIndex] = a[aIndex];
        aIndex++;
      }
    }
  });
};

/*
ai = 0 -> 1 -> 2
bi = 0 -> 1 -> 2

a = [4, 5]
b = [4, 5, 0, 0];
c = [4, 4, 5, 5]; // length === 4
*/