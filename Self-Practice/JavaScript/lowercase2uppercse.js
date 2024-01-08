let strVal = "Hello World"
console.log("before convert:", strVal)

//console.log(strVal.toUpperCase(strVal))     //it does convert but not update it

strVal = strVal.toUpperCase(strVal)
console.log("after convert:", strVal)

strVal = strVal.toLowerCase(strVal)
console.log("again convert into lowerCase:", strVal)