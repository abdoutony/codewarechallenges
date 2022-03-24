/* vowels count */
function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    switch (character) {
      case 'a':
        vowelsCount++;
        break;
      case 'e':
        vowelsCount++;
        break;
      case 'i':
        vowelsCount++;
        break;
      case 'o':
        vowelsCount++;
        break;
      case 'u':
        vowelsCount++;
        break;
      default:
        continue;
    }
  }

  return vowelsCount;
}

function getCountSolutionTwo(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

/* even or odd number */
function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

function even_or_odd_solution_two(number) {
  return number % 2 ? 'Odd' : 'Even';
}

/* return opposite number */
function opposite(number) {
  //your code here
  return number * -1;
}
function oppositeSolutionTwo(number) {
  return number > 0 ? -number : Math.abs(number);
}
/* get middle challenge */

function getMiddle(s) {
  //Code goes here!
  var position;
  var length;
  if (s.length % 2 == 1) {
    position = s.length / 2;
    length = 1;
  } else {
    position = s.length / 2 - 1;
    length = 2;
  }

  return s.substring(position, position + length);
}

function getMiddleSolutionTwo(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

/* Mumbleling challenge */
function accum(s) {
  // your code
  let strBuilt = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      strBuilt += s.charAt(i).toUpperCase() + '-';
    } else {
      strBuilt += s.charAt(i).toUpperCase();
      for (let j = 0; j < i; j++) {
        strBuilt += s.charAt(i).toLowerCase();
      }
      strBuilt += '-';
    }
  }
  return strBuilt.slice(0, -1);
}

function accumSolution2(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

/* you are a square */
var isSquare = function (n) {
  if (n >= 0) {
    if (Math.sqrt(n) % 1 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

var isSquareSolutionTwo = function (n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0;
};

/* remove vowels from string */

function disemvowel(str) {
  let al = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!al.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

function disemvowelSolutionTwo(str) {
  return str.replace(/[aeiou]/gi, '');
}

/* Highest and lowest */
function highAndLow(numbers) {
  let arr = numbers.split(' ');
  let newArr = [];
  arr.map((el) => {
    newArr.push(parseInt(el));
  });
  let minNumber = Math.min(...newArr);
  let maxNumber = Math.max(...newArr);
  let result = '' + maxNumber + ' ' + minNumber;
  return result;
}
function highAndLowSolutionTwo(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

/* Exes and ohs */

function XO(str) {
  //code here
  let xCounter = 0;
  let oCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'o' || str.charAt(i) === 'O') {
      oCounter++;
    } else if (str.charAt(i) === 'x' || str.charAt(i) === 'X') {
      xCounter++;
    } else {
      continue;
    }
  }
  if (xCounter === oCounter) return true;
  return false;
}

function XOSolutionTwo(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

/* Square every degit */
function squareDigits(num) {
  // convert the number into array where evry element of the arrray is a degit of the number
  var initialArray = ('' + num).split('');
  var newArr = [];
  var newArr2 = [];
  let str = '';
  initialArray.map((el) => {
    newArr.push(parseInt(el));
  });
  newArr.map((el) => {
    newArr2.push(Math.pow(el, 2));
  });
  newArr2.map((el) => {
    str = str + el;
  });
  return parseInt(str);
}

function squareDigitsSolution2(num) {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return val * val;
      })
      .join('')
  );
}

/* SHortest word */
function findShort(s) {
  let arr = s.split(' ');
  let arrCounts = [];
  arr.map((el) => {
    arrCounts.push(el.length);
  });
  return Math.min(...arrCounts);
}
function findShortSolutionTwo(s) {
  return Math.min.apply(
    null,
    s.split(' ').map((w) => w.length)
  );
}

/*Complementary dna */

function DNAStrand(dna) {
  //your code here
  let newStr = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna.charAt(i) === 'T') {
      newStr += 'A';
    } else if (dna.charAt(i) === 'A') {
      newStr += 'T';
    } else if (dna.charAt(i) === 'C') {
      newStr += 'G';
    } else if (dna.charAt(i) === 'G') {
      newStr += 'C';
    } else {
      continue;
    }
  }
  return newStr;
}

var pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
function DNAStrandSolutionTwo(dna) {
  return dna
    .split('')
    .map(function (v) {
      return pairs[v];
    })
    .join('');
}

/* Descending order */
function descendingOrder(n) {
  var initialArray = ('' + n).split('');
  var newArr = [];
  let str = '';
  initialArray.map((el) => {
    newArr.push(parseInt(el));
  });
  newArr.sort();
  newArr.reverse();
  newArr.map((el) => {
    str += el;
  });

  return parseInt(str);
}

function descendingOrderSolutionTwo(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}

/* sum of positives */

function positiveSum(arr) {
  let sum = 0;
  arr.map((el) => {
    if (el > 0) {
      sum += el;
    }
  });
  return sum;
}
function positiveSumSolutionTwo(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

/* Isograms */
function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}

/* List filtering */
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((el) => typeof el !== 'string');
}

/* find the smallest integer in an array*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

/* sum of two lowest integers */
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let arrSmallest = [];
  while (arrSmallest.length < 2) {
    let min = Math.min(...numbers);
    let minPos = numbers.indexOf(min);
    numbers.splice(minPos, 1);
    arrSmallest.push(min);
  }
  let result = arrSmallest.reduce((acc, curr) => {
    return acc + curr;
  });
  return result;
}

/* Growth of population */
function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

/* string repeat */
function repeatStr(n, s) {
  return s.repeat(n);
}

/* is it a triangle */
function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  if (a + b > c && a + c > b && c + b > a) return true;
  else return false;
}

/* find the next perfect square */
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

/* credit card mask */
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

/* sum of odd numbers */
function rowSumOddNumbers(n) {
  return n * n * n;
}

/* find the devisors */
function divisors(integer) {
  var res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime';
}

/* Return negative */
function makeNegative(num) {
  // Code?
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

/* remove first and last character */
function removeChar(str) {
  //You got this!
  return str.slice(1, -1);
}

/* remove string spaces */
function noSpace(x) {
  return x.replace(/\s/g, '');
}

/* convert boolean values into strings 'Yes' or 'No' */
function boolToWord(bool) {
  return bool === true ? 'Yes' : 'No';
}

/*Convert a Number to a String */
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

/* Basic Mathematical operations */
function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  }
  if (operation === '-') {
    return value1 - value2;
  }
  if (operation === '*') {
    return value1 * value2;
  }
  if (operation === '/') {
    if (value2 > 0) {
      return value1 / value2;
    }
  }
}

/* Sum of the first nth terms of series */
function SeriesSum(n) {
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      reverage += 3;
      result = result + 1 / reverage;
    }
  }
  return result.toFixed(2);
}

/* Keep hydrated */
function litres(time) {
  return Math.floor(time * 0.5);
}

/* century from year */
function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}

/* Beginner Lost without a map */
function maps(x) {
  let newarr = x.map((el) => el * 2);
  return newarr;
}
