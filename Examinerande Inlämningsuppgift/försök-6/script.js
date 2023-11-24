//async function test() {}
const getData = async () => {
    return 'Hej'

}

// const test = getData()
// console.log(test)

getData().then(data => console.log(data))

fetch('todos.json')
.then(res => res.json())