// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
  //code here
  const arrayNumber = n.toString().split('').map(Number);
  const newArrayNumber = [];
  let j = 0;
  for (let i = arrayNumber.length - 1; i >= 0; i--){
    newArrayNumber[j] = arrayNumber[i];
    j++;
  }
  return newArrayNumber;
}
