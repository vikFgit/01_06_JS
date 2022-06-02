// написать функцию, которая сравнивает 2 значения одного типа и возвращает большее, если сравнение невозможно, то вернуть null

const userInputNum1 = prompt('Enter first number');
const userInputNum2 = prompt('Enter second number');
/**
 * comparison of values of the same type
 * @param {any} value1 
 * @param {any} value2 
 * @returns any | null
 */
const compareSameValuesType = function(value1, value2){
  if(typeof value1===typeof value2 && value1>value2){
    return value1;
  }else{
    return value2;
  }
}
if(typeof value1!==typeof value2){
  console.log(null);
}
console.log(compareSameValuesType(userInputNum1, userInputNum2));

// variant2
// const compareSameValuesType = function(value1, value2){
//   if(typeof value1===typeof value2){
//    if(value1>value2){
//       return value1;
//   }else{
//       return value2;
//   }else
//  return null;
// }
// }