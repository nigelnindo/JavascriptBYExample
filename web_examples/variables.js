// var, let, const

var a = 'a';
console.log(a)

a = 'aa'
console.log(a)

var quotes = '"statement with quotes"'
console.log(quotes)

/**
 * var usage
 */
 {
     var thisWorks = "this works!"
     thisWorks = "inner scope"
     console.log(thisWorks)
 }

 // Not cool because we can access values defined in the inner scope. Prefer let
 thisWorks = "outer scope"
 console.log(thisWorks)
