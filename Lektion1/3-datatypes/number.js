/*
    NUMBERS
    ----------------------------------------

    +   Lägg till
    -   Ta bort
    *   Gångra
    /   Dela
    **  Upphöjt i
    %   division remainder
    
    ++  Öka med 1
    --  Minska med 1
    =   Lika med
    +=  Lägg till på det ursprungliga värdet  
    -=  Ta bort från de ursprungliga värdet

    Math.()

    */
    
    //console.log(3 % 2)
let num1 = 10;
let num2 = 2.5;
    
let string1 = '10'


num1 = num1 + 1
num1 += 1;
num1 ++

num1 = num1 - 1
num1 -= 1;
num1 --

//Konverterar string1 till ett nummer med hjälp av +


    console.log(num1 + string1)

    console.log(num1 + Number(string1))

    console.log(num1 + +string1)


console.log(Math.random() * 100)


//let randomNr = Math.ceil(Math.random() * 100)
let randomNr = Math.random() * 100
let roundedNr = Math.ceil(randomNr)


console.log('Random number: '+ randomNr)
console.log('Random number:' + roundedNr)