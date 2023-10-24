// STRING = text

/*
    let name = "Alva"
    let name = 'Alva'   -Denna brukar vi oftast använda
    let name = 'Alva'   - Används när vi vill göra en template literal (shift + ', tryck mellanslag)




*/

let text = "Mitt namn är Alva och jag är \"bäst\" i världen"
// om en text har blackslash (\) framför citat tecknen i texten så ignorerar koden citattecknen som en datatyp
text = 'Mitt namn är Alva och jag är "bäst" i \'hela\' världen'

let name = 'Alva';
let age = 23;

text = 'Jag heter ' + name + ' och jag är ' + age + 'år gammal';
text = "Jag heter " + name + " och jag är " + age + "år gammal";

// Template literal
text = `jag heter ${name}
och jag är ${age} år gammal`

//console.log(text)

/* let text2 = new String ('hej')

console.log(text2)
*/

let myName = 'Alva Ahlberg'

//console.log(myName.length)
//console.log(myName[1])
//console.log(myName.index0f('k))
//console.log(myName.toUpperCase())
//console.log(myName.toLowerCase())

let names = myName.split(' ')
//console.log(names)

let firstName = names[0]
let lastName = names[1]

let text2 = `                    mitt förnamn är ${firstName} och mitt efternamn är ${lastName}`
console.log(text2.trim())

document.body.innerText = `Hej ${firstName}, välkommen tillbaka`