/* START CODE UNDER THIS LINE */
//**************Pulse Check**********************
//q1:

const recFunction_v01 = function () {
    // TODO: Your code here
   // recFunction_v01()
  };
  recFunction_v01(); //  Uncaught RangeError: Maximum call stack size exceeded
  
//-------------------------
//q2:

const recFunction_v02 = function (number) {
    // TODO: Your code here
    console.log(number)
if ( number === 0) {
   return "countdown is over"
}
return recFunction_v02(number - 1)

  };

  recFunction_v02(9); // => undefined
  
//-------------------------
//q3:

const recFunction_v03 = function (number) {
    // TODO: Your code here
    if( number === 0 ){
        return ".";
    } else{
    return recFunction_v03(number -1)
    }
  };
  
console.log(  recFunction_v03(9)  ); // => "0"

//-------------------------
//q4:

const recFunction_v04 = function (number) {
    // TODO: Your code here
if (number === 0){
    return '' ;
}
    return String(number) + recFunction_v04(number - 1);
  };
  
  console.log(recFunction_v04(9)); // => "9876543210"

//-------------------------
//q5:

const countDown_v02 = function (number) {
    console.log(number);
    if (number === 0) {
      return "0";
    }
    return number + "-" + countDown_v02(number - 1);
  };
  
  countDown_v02(10); // => "10-9-8-7-6-5-4-3-2-1-0"
  countDown_v02(3); // => "3-2-1-0"


//**************Practice**********************
//Q1:

//Write a function factorial that accepts a number argument
const factorial = function (number) {
    // TODO: Your code here
//and returns the factorial of that number.
    if (number === 0 ) {
        return 1 ;

    }
    return (number * factorial(number - 1) )
};
  
  console.log(factorial(5)); // 1 * 2 * 3 * 4 * 5 => 120
  console.log(factorial(3)); // 1 * 2 * 3 => 6
  console.log(factorial(1)); // => 1
  console.log(factorial(0)); // => 1

//-------------------------
//Q2:

/*const sumCubes = function (numbers) {
    // TODO: Your code here
    if (numbers.length === 0 ){
        return 0;
    }
    return numbers[numbers.length -1] ** 3 + sumCubes(numbers)
  };
  
  sumCubes([1, 2]); // => 9
  sumCubes([1, 2, 3]); // => 36
  sumCubes([5, 3, 3]); // => 179
  sumCubes([]); // => 0
*/
//-------------------------
//Q3:

const getLength = function (string) {
    // TODO: Your code here

  };
  
  getLength("Hello"); // => 5
  getLength("John"); // => 4
  getLength(""); // => 0

//-------------------------
//Q4:

const reverseString = function (string) {
    // TODO: Your code here
    if (string === ""){
        return "";
    }
      //  return reverseString.reverse()
  };
  
  reverseString("Hello World"); // => "dlroW olleH"
  reverseString("John Doe"); // => "eoD nhoJ"
  reverseString(""); // => ""

//-------------------------
//Q6:

const oddOrEven = function (number) {
    // TODO: Your code here
    if (number === 0){
        return "the number is even";
    } else if ( number === 1) {
        return " the number is odd";
    } else {
        if (number < 0) {
            return oddOrEven(-number);
        }
            return oddOrEven(number-2);
    }

 };
  
  
  console.log(oddOrEven(8)); // => "The number is even"
  console.log(oddOrEven(1)); // => "The number is odd"



























