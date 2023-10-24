/*
Variables

variabel = någonting som vi lagrar information i


variabelnamn: ska vara på engelska

camelCase   =   JavaScript, Java, C, C++
Pascal      =   C#, Pascal
_private    =   en variabel som bara lever inom en viss scope.

API_KEY     = Brukar användas när värdet är konstant och aldrig kommer ändras

Exempel: firstname, lastname, email, 


*/
/*
    firstName = 'Alva';     //global deklarering (Gör INTE såhär)
    var firstName = 'Alva'; //global deklarering (Gör INTE såhär)

    let lastName = 'Ahlberg'    //Logal (scopad) deklarering (Gör INTE såhär)
    //let lastName = 'Andersson'
    console.log(lastName)
    lastName = 'Andresson'
    console.log(lastName)

    const email = 'Alva@mail.com'
    email = 'nisse@mail.com'

    const PI = 3.14
    //PI = 5
*/
/*
        Deklarera variabler
        ----------------------------------------------------
        var = global variabel - accessbas överallt i koden
        let = lokal variabel  - accessbas inm det givna området
        const = konstant - kan inte skrivas över (undantag finns)


        C# exempel
        sring name = "Alva";
        int age = 23;

        JS exempel
        let name = 'Alva';
        let age = 23;
*/ 


/*
    JavaScript Datatyper
    ---------------------------------------------------
    String      =   Text, 'abc', '123'
    Number      =   Heltal, decimaltal
    Boolean     =   Sant/Falskt, true/false
    null        =   Tomt, manuellt satt värde
    undefined   =   Odefinerat, tomt (automatiskt)
    Object      =   innehåller ett eller flera andra värden
    Array       =   en lista med värden, Array är av datatyper Object


*/

let datatype;       //undefined

console.log(typeof datatype);   
datatype = 'en text'            
console.log(typeof datatype);
datatype = '3'
console.log(typeof datatype);   
datatype = false
console.log(typeof datatype);   
datatype = {}
console.log(typeof datatype);   
datatype = []
console.log(typeof datatype);   
datatype = null
console.log(typeof datatype);   