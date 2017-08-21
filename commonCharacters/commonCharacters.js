/** cc30 commonCharacters
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/
/*  INPUT: 2 strings
  FUNCTION: split, remove white space, Set to make unique, compare if match, add to return
    OUTPUT: 1 string
*/

// const commonCharacters = (str1, str2) => {
//   const arr1 = str1.split('');
//   const arr2 = str2.split('');
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);
//   console.log(arr1);
//   console.log(arr2);
//   console.log(set1);
//   console.log(set2);
//   const arr3 = arr1.concat(arr2);
//   console.log(arr3);
//   const set3 = new Set(arr3);
//   console.log(set3);
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
const commonCharacters = (str1, str2) => {
  const set1 = new Set(str1);
  const set2 = new Set(str2);
  const intersection = [...set1].filter(letter => set2.has(letter));
  const result = intersection.join('');
  return result;
};


console.log(commonCharacters('acexivou', 'aegihobu')); // ~~~> 'aeiou'
