/*
  給定兩個字串，用一個函式，判斷其中一個字串經過排序後，與另一個字串是否相等。
*/

const inputs = [
  ['abcfg', 'fgcab'],
  ['qsxed', 'tnguh'],
];

const compareTwoStr = (strA, strB) => {
  const compare = [];
  strA.split('').forEach(e => {
    compare[e.charCodeAt()] = true;
  });

  const result = strB.split('').every(e => {
    if (compare[e.charCodeAt()]) {
      return true;
    }
    return false;
  });

  if (result) {
    console.log('same')
  } else {
    console.log('no!')
  }

  return result;
};

inputs.forEach((pair, index) => {
  console.log(`pair${index + 1}`);
  compareTwoStr(pair[0], pair[1]);
});
