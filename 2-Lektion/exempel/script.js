const leftNames = ['Alva', 'Michael', 'Tuva', 'Yvonne', 'Ankush', 'Skutt']
const rightNames = ['Nisse', 'Hans']


const leftBox = document.getElementById('box-1')
const rightBox = document.getElementById('box-2')

function renderNames() {
    leftBox.innerHTML = ''
    rightBox.innerHTML = ''


    leftNames.forEach(function(name) {

        const p = document.createElement('p')
        p.classList.add('item')
        p.innerText = name

        p.addEventListener('click', function(){
            const name = leftNames.splice(i, 1)
            
            console.log(name)
            rightNames.push(name)
            renderNames()
        })

        leftBox.appendChild(p)
    })
    rightNames.forEach(function(name) {
        
        const p = document.createElement('p')
        p.classList.add('item')
        p.innerText = name
        //LÄGG IN EVENT LISTENERS HÄR
        rightBox.appendChild(p)
    })
    
}

renderNames()