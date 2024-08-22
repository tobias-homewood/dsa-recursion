/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
// base case: if there's only one word, return its length
let longestWord = words[0].length;
if (words.length === 1) return longestWord;

// recursive case: return the longest word of the first word and the rest of the words
const longestInRest = longest(words.slice(1));
return Math.max(longestWord, longestInRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
// base
if (str.length < 3) return str[0];

// recursive
return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
// base
if (str.length < 2) return true;

// recursive
if (str[0] === str[str.length - 1]) {
  return isPalindrome(str.slice(1, str.length - 1));
} else {
  return false;
}
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // base, if the array is empty the element is not there
if (arr.length === 0) return -1;

// recursive
if (arr[0] === val) return 0;

const foundIndex = findIndex(arr.slice(1), val);

if (foundIndex === -1) {
  return -1;
}
return 1 + foundIndex;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
// base, something with 1 letter is the same in reverse, or with 0 letters, still the same
  if (str.length < 2) return str;

// recursive
return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
// base
if (Object.keys(obj).length === 0) return [];

// recursive
const key = Object.keys(obj)[0];
const value = obj[key];

delete obj[key];

const rest = gatherStrings(obj);

if (typeof value === "string") {
  return [ value ].concat(rest);
}

if (typeof value === "object") {
  return gatherStrings(value).concat(rest);
}

return rest;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
if (arr.length === 0) return -1;

const midIndex = Math.floor(arr.length / 2);

if (arr[midIndex] === val) {
  return midIndex;
}

if (arr[midIndex] > val) {
  return binarySearch(arr.slice(0, midIndex), val);
} else {
  const result = binarySearch(arr.slice(midIndex + 1), val);
  return result === -1 ? -1 : midIndex + 1 + result;
}
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
