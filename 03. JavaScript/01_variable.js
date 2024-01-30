// Variable Syntax:     var variable_name = variable_value;

var numVar = 12, numVar2 = 12.3;
console.log(numVar, numVar2);

var strVar = 'he', strVar2 = "Hello";
console.log(strVar, strVar2);

var boolVar = true, boolVal2 = false;
console.log(boolVar, boolVal2);

//Instead of var you can use let/const for different different purposes.

// In JavaScript, let and const are used to declare variables, just like var, but they have some differences in terms of scope and mutability.

// var: Variables declared with var are function-scoped or globally scoped, but not block-scoped. They can be re-declared and updated within their scope.

// let: Variables declared with let are block-scoped. They can be updated but not re-declared within their scope.

// const: Variables declared with const are also block-scoped like let, but they cannot be re-assigned after declaration. However, if the variable is an object or array, its properties or elements can still be modified.