// strings
var a = 'Hello'
var b = 'World'

console.log("***" + "\n" + "STRINGS" + "\n" + "***")

console.log(a)
console.log(b)

// string concatenation: combine strings
/**
 * brackets evaluation
 * Remember: Functions evaluate to the right
 * (+, +)
 * (" " + world[b]) = " world"
 * (hello[a] + " world" ) = "hello world"
 */
console.log(a + " " + b) 

//numbers


/**
 * Functions associate to the right
 * Step by step of how the compiler runs this code
 * EVALUATE: `console.log(1 + 3)`
 * Figure out what functions are in the line above and in what order
 * We have two functions
 * * console.log
 * * +
 * (console.log, +)
 */
console.log("***" + "\n" + "NUMBERS" + "\n" + "***")
console.log(1 + 3)
console.log(2 + 2.2)

//booleans: A statement that evaluates to true or false
console.log("***" + "\n" + "BOOLEANS" + "\n" + "***")
console.log(true)
console.log(!true)
console.log(3 > 2)

console.log(2 > 3)
console.log(a + b)

console.log(true || false)





