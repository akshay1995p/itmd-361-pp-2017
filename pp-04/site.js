//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

var x = 5;

function double(num) {
<<<<<<< HEAD
  var x = num * 2;
=======
  x = num * 2;
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654
  return x;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):
<<<<<<< HEAD
(function(){
    function double(num) {
        var x = num * 2;
        return x;
    }
    double(6);
    console.log('The value of x is:', x, 'It should be 5.');
})();
=======

>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654

//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
<<<<<<< HEAD
  for (var i = 0; i < array.length; i++) {
=======
  for (i = 0; i < array.length; i++) {
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

<<<<<<< HEAD
console.log(typeof(i)) // should be 'undefined', not 3
=======
console.log(i) // should be 'undefined', not 3
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

<<<<<<< HEAD
/* ANSWER:
X is native to this function and its is actually being passed as a function parameter. having x as a function parameter it outweighs the value of the global variable. So, x wont carry the value of the global variable declared on line 5. Which results in outputting the local value of var x. However, when you dont call the function (addtwo) x will output as a global value.

*/

=======
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654
function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
<<<<<<< HEAD

=======
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654
