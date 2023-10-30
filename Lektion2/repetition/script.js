
/* 
//ctrl + '

var = global
let = går att skriva över
const = går inte att skriva över

camerCase
SCREAMING_SNAKE_CASE = om en variabel ALDRIG kommer att ändras

String - text
Number - alla tal
Boolean - true/false
null - manuellt satt tomt värde
undefined - automatiskt satt tomt värde
const test = () => {} undefined
const test2 = test()
Object - innehåller ett eller flera värden
Array - lista på en eller flera värden
*/

let text = 'en \'text "här'
text = "en ny \"text med 'dubbel-citat tecken"
text = `som en template literal (baksticks) ${1+1}`

//console.log(text)

const firstName = 'Alva'
const lastName = 'Ahlberg'

const fullName = firstName + ' ' + lastName
const initials = fullName[0] + lastName [0]
//console.log(initials)

//NUMEBRS

let num1 = 0
num1 = num1 + 20
num1 += 20
num1 ++

//console.log(num1)

const string = '123'

const number = +string

//console.log(string)
//console.log(number)

//OBJECT

const obj1= {
    key: 'value'
}

obj1.name = 12345

console.log(obj1.name)

const json = JSON.stringify(obj1)

console.log(json)

const js = JSON.parse(json)

console.log(js)

//Array

const users = [
    {id: 1, name: 'Alva', lastName: 'Ahlberg'},
    {id: 2, name: 'Ankush', lastName: 'Alina Ahlberg' },
]

/*
unshift() - Lägger till i början
push() - Lägger till i slutet
shift() - tar bort i början
pop() - tar bort i slutet och returnerar det värdet vi tar bort


*/

//const me = users.shift()

//console.log(me)

const Alva = users.find(function(user) {
    return user.name === 'Alva'
})

//console.log(Alva)

user.splice(1, 0, { id: 3, name: 'Andrew', lastName: 'Brazil'})

const andrew = users.splice(1, 1)
console.log(andrew.name)

