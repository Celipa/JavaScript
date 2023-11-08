// let email = 'Alva@mail.com'

// console.log(email.includes('Ahlberg'))

// if(email.includes('@')) {
//     console.log('email innehåller ett @')
// }

//if(!user.active) {
//    console.log('användaren är aktiv')
//}

const user = {
    active: false
}


// COMPARE STATEMENTS

let number = 13
let string = '13'

//console.log(number == string) //två = tecken jämför bara värder = true
//console.log(number === string) //två = tecken jämför värdet OCH datatyp = false

//console.log(11 != 12)

//if (user.active !== true) {}

//större än
console.log(3 > 2)
//mindre än
console.log(3 < 2)

//större eller lika med
console.log(2 <= 2)
console.log(2 >= 2)

//for(let i = 0; i <= 3; i++) {}


//&& betyder att BÅDA påståendena måste vara sanna
if(user.active === false && 3 === '3') {
    console.log('nu kör vi if satsen')
}

if(user.active === false || 3 === '3') {
    console.log('woohoo')
}