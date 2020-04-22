// var sleep = require('sleep');

//standard for loop
// do this this thing 10 times

/**
 * For loop has 4 parts
 * 1.1 => initialize value
 * 1.2 => create boolean to let it when to terminate
 * 1.3 => increment the value
 * 2 => body of the foor loop
 */

 /**
 * Initialize i[0]
 * i[0] is equal to 10? false
 */
for (var i = 0; i <= 10; i++) {
    console.log(i)
}

/**
 * We've created an object.
 * An object contains key-value pairs
 */
const baes = {
    'Nigel': 'Lillie',
    'Anto': 'Michelle',
    'Owen': 'Sharon'
}

/**
 * To access the value stored in a key inside an object, use
 * this syntax: variable_name[name_of_key] 
 */
 baes['Nigel']

function whosBae(name){
    return baes[name]
}

// console.log(whosBae('Anto')) 

/**
 * For ... in loop
 * For each data item in this group of data
 * For an object, for ... in loop allows you to iterate over the key names
 */
 for (name in baes) {
     console.log(whosBae(name))
 }

let numbers = [1,2,3,4,5,6,7,8]

/**
 * For array, for ... in loop allows you to iterate over values
 */
for (number in numbers) {
    console.log(number)
}

/**
 * Parameters are what you pass in into a function
 * Function adds any arbitrary amount of numbers from an array
 * @param {*} arrayOfNumbers an array of numbers
 */
function add(arrayOfNumbers) {

    let totalSum = 0;

    for (number in arrayOfNumbers) {
        totalSum = totalSum + number;
    }

    return totalSum;
}

console.log("Array access")
console.log(numbers[0])
console.log(numbers[1])

const coronaCases = {
    'Mombasa': 20,
    'Kilifi': 10,
    'Kwale': 50,
    'Nairobi': 100
}

function totalCases(coronaCasesObject) {
  let totalCases = 0;
  
  for (key in coronaCasesObject) {
      totalCases = totalCases + coronaCasesObject[key]
  }

  return totalCases;
}

/**
 * (): Brackets
 * -> Defining parameters of a function i.e add(1,2)
 * -> Defining scope of for loops i.e for number in number
 */

 /**
  * []: ??
  * -> Defining elements within an array data structure i.e [1,2,3]
  * -> passing in akey to get the value of an object i.e baes['key']
  * -> Get the value contained within an array at a specific index i.e numbers[0]
  */

/**
 * {}: Curly brackets
 * -> creating a isolated scope
 * -> writing code for your function i.e function add (a, b) { a + b}
 * -> defining objects i.e {'key': 'value'}
 */

















