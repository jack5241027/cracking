/*
  判斷某字串裡，所有字元是否皆不同。
*/

const inputs = [
  'asdfghjkl',
  'asdfghjkjhgfdsa',
];

const checkIsAnyDifferent = (input) => {
  const str = input.split('');
  const compare = [];
  str.some(function(element) {
    const ascii = element.charCodeAt();
    if (!compare[ascii]) {
      compare[ascii] = true;
    } else {
      console.log(element, 'repeat');
      return true;
    }
  });
};

inputs.forEach(e => checkIsAnyDifferent(e));
