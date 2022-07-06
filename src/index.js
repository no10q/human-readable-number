module.exports = function toReadable(n) {
  const array1to19 = ['', 'one', 'two', 'three', 'four', 'five', 'six',
   'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrayOfTens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const nArray = n.toString().split('');
  const endByZero = nArray[nArray.length - 1];
  const less20fix = nArray[nArray.length - 2];

  if (n > 0 && n < 20) {
    n = array1to19[n];
  } else if (n === 0) {
    n = 'zero';
  } else if (n >= 20 && n < 100 && endByZero != 0) {
    n = `${arrayOfTens[nArray[nArray.length - 2]]} ${array1to19[nArray[nArray.length - 1]]}`;
  } else if (n >= 20 && n < 100) {
    n = `${arrayOfTens[nArray[nArray.length - 2]]}${array1to19[nArray[nArray.length - 1]]}`;
  } else if (n >= 100 && n < 1000 && endByZero != 0 && less20fix >= 2) {
    n = `${array1to19[nArray[nArray.length - 3]]} hundred ${arrayOfTens[nArray[nArray.length - 2]]} ${array1to19[nArray[nArray.length - 1]]}`;
  } else if (n >= 100 && n < 1000 && less20fix < 2 && nArray[1] == 0 && nArray[2] == 0) {
    n = `${array1to19[nArray[nArray.length - 3]]} hundred${arrayOfTens[nArray[nArray.length - 2]]}${array1to19[n - (nArray[0] * 100)]}`;
  } else if (n >= 100 && n < 1000 && less20fix < 2) {
    n = `${array1to19[nArray[nArray.length - 3]]} hundred ${arrayOfTens[nArray[nArray.length - 2]]}${array1to19[n - (nArray[0] * 100)]}`;
  } else if (n >= 100 && n < 1000 && endByZero == 0 && less20fix >= 2) {
    n = `${array1to19[nArray[nArray.length - 3]]} hundred ${arrayOfTens[nArray[nArray.length - 2]]}${array1to19[nArray[nArray.length - 1]]}`;
  } else {
    n = 'Wrong number. Try again.'
  }

  return n;
}
