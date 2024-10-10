// https://www.codewars.com/kata/54edbc7200b811e956000556/javascript

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


// count all the values in the sheep list that is true
// do not include all the values in the sheep that are false
// set all the null and undefine in the sheep list to be false


function countSheeps(sheep) {
  // TODO
  let count = 0;
//  loop from 0 till the last value in the sheep list
  for (i = 0; i <= sheep.length; i++){
//     conditions
//     sheep[i] == null => false, count += 0
//     sheep[i] == false, count += 0
//     sheep[i] == true, count += 1
    if (sheep[i] == true){
      count += 1;
    }
    else if (sheep[i] == null){
      count += 0;
    }
    else {
      count += 0;
    }
  }
  return count;
}
