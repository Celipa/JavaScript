/*
ARRAYS -En lista med ett eller flera värden


vi vill hålla samma datatyp inuti en array
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
Gör INTE såhär =
const multiArray = ['12', 12, true, {firstName:'Alva'}]
*/
const users = [

    {firstName:'Alva', lastName: 'Ahlberg', age: 23, isActive:true},
    {firstName:'Ankush', lastName: 'Bhakta', age: 22, isActive:false},
    {firstName:'Yvonne', lastName: 'Linden', age: 61, isActive:true},
]

const names = ['Alva', 'Ankush', 'Yvonne']

//console.log(names)

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])


// Detta går inte då vi försöker byta ut arrayen
//names = ['Alva', 'Ankush', 'Yvonne']

console.log(names)
// Lägga till i början av en array
names.unshift('Colin')
console.log(names)
//Ta bort i början av en array
names.shift()

console.log(names)

names.push('Colin')

console.log(names)

names.pop()

console.log(names)

names[1] = 'Nytt namn'
console.log((names.indexOf('Nytt namn')))
//-------------------------//
const index = names.indexOf('Nytt namn')
names[index] = 'hej'

names[names.indexOf('Nytt namn')] = 'hej'

delete names [1]
console.log(names)
//------------------------//

names[names.indexOf('Nytt namn')] = 'hej'

delete names [1]
// .splice() - tar bort och / eller lägger till ett /flera värde från en specifik position
names.splice(1, 1)

console.log(names)

//-------------------------------------------//
names.splice(1, 0 ,'Colin', 'Ankush') //tar bort 0 och lägger till Colin och Ankush

console.log(names)
//-------------------------------------------//
names.splice(1, 2, 'Jack')
console.log(names) //tar bort 2 från index 1 och lägger till 'Jack'
//-------------------------------------------//
names.splice(names.indexOf('Jack'), 1, 'Tommy', 'Nisse')
console.log(names)

//-------------------------------------------//

// names.push(arr2)
// console.log(names.concat(arr2))
const arr2 = ['Colin', 'Ankush']

console.log(names)
//-------------------------------------------//

//SPREAD OPERATOR
//...arr2 

// names.push(...arr2)
// console.log(names)

//const allTheNames =[...names, ...arr2, 'Jack']
// console.log(allTheNames)

// const obj = {
//     fName: 'Alva',
//     lName: 'Ahlberg'
// }
// const obj2 = {
//     ...obj,
//     lName: 'Bhakta',
//     email:'Alva@mail.com',
// }

// console.log(obj2)

const allTheNames =[...names, ...arr2, 'Jack']
console.log(allTheNames)

allTheNames.sort()
console.log(allTheNames)

// allTheNames.sort((a, b) => {
//     return Math.random () - 0.5
// })
// allTheNames.sort()
// allTheNames.reverse()

allTheNames.sort().reverse()
console.log(allTheNames)

const numbers = [1, 2, 3, 4, 5, 6, 10, 11, 12]
console.log(numbers)

numbers.sort((a, b)=> {
    return a - b
})
console.log(numbers)
