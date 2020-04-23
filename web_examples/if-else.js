let number = 6
let x = number % 2

if ( x == 0 ) {
    console.log("The number " + number + " is even")
} else {
    console.log("The number " + number + " is odd")
}

/**
 * Allows for multiple conditionals
 * @param {} a 
 */
function getAddress(a) {
    if (a == "Nigel") {
        console.log("Nigel stays at Kawamu 402")
    } else if (a == "Owen") {
        console.log("Owen Stays at kawamu 303")
    } else if (a == "Jeff") {
        console.log("Jeff stays at Mirai 10 floor")
    } else {
        console.log("I do not know where " + a + " stays")
    }
}

getAddress("303")



