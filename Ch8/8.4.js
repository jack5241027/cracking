/*
  將 字串/陣列 所有空白轉乘 %20
*/

const inputs = [
  ('My name is Jack.      ').split(''),
  (' Are you sure?      ').split('')
];


const insertPA20 = (ary) => {
  const aryLength = ary.length;
  let strLen = null;
  for (let i = aryLength; i >= 0 ; i--) {
    if (strLen === null && (ary[i - 1].charCodeAt() !== 32)) {
      strLen = i;
    }
  }

  let diff = aryLength - strLen;

  for (let j = strLen - 1; j >= 0 ; j--) {
      if ((ary[j].charCodeAt() !== 32)) {
        ary[j + diff] = ary[j];
      } else {
        ary[j + diff] = '0';
        diff = diff - 1;
        ary[j + diff] = '2';
        diff = diff - 1;
        ary[j + diff] = '%';
      }
  }
  console.log(ary.join(''));
}

inputs.forEach(charList => insertPA20(charList));
