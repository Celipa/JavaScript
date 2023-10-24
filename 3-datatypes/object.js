/*  
OBJECT
Innehåller ett eller flera värden

kervis som key:value par

JSON (JavaScript Objet Notation)

JS OBJEKT
const person = {
    firstName: 'Alva',
    lastName: 'Ahlberg'
}

JSON Objekt
const person = {
    "firstName": "Nisse",
    "lastName": "Ahlberg"
}
*/

const user = {
    firstName: 'Alva',
    lastName: 'Ahlberg',
    age: 23,
    adress: {
        street: 'gatan',
        nr:12,
        postalCode: '17079',
        city:'Stockholm'
    },
    isValidated: true,
    phoneNumbers:[
        '073-5455632',
        '073-5455632'
    ]
}
console.log(user)

user.firstName = 'Alva'
user.email = 'Alva@mail.com'

let json = JSON.stringify(user)
console.log(json)

let js = JSON.parse(json)
console.log(js)

//Destructure
// const firstName = user.firstName
// const lastName = user.lastName

const { firstName, lastName } = user

console.log(`Användaren heter ${firstName} ${lastName} och bor i ${user.adress.city}`)

class User {
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.age = age
        this.id = Math.random() * 1001;
        this.fullName = this.firstName + ' ' + this.lastName
        this.loggedIn = false
    }
    login() {
        this.loggedIn = true
    }
    logout() {
        this.loggedIn = false
    }
}

const user2 = new User('Alva', 'Ahlberg', 'Alva@mail.com', 23)
const user3 = new User('Alina', 'Ahlberg', 'Alina@mail.com', 23)
console.log(user2)
console.log(user3)

class Admin extends User {
    constructor(adminID, firstName, lastName, email, age) {
        super(firstName, this.lastName, email, age)
        this.adminID = adminID
    }
}
const admin = new Admin(1, 'Nils', 'Persson', 'Nils@mail.com', 15)

