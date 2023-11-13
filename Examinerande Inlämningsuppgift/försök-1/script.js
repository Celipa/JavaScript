const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

regForm.addEventListener('submit', e => {
    e.preventDefault()
  
    validateText(inputBox)
  })
  

function setError(input, message) {
    const parent = input.parentElement;
    parent.classList.add('is-invalid')
    parent.classList.remove('is-valid')
    const errorElement = parent.querySelector('.invalid-input')
    errorElement.innerText = message
  }
  function setSuccess(input) {
  const parent = input.parentElement;
  parent.classList.remove('is-invalid')
  parent.classList.add('is-valid')
}

function validateText(input) {
    if(input.value.trim() === ''){
      setError(input, 'Name can\'t be empty')
      return
    }
    else if(input.value.trim().length <= 2) {
      setError(input, 'Name must be atleast 2 chars long')
      return
    }
  
    setSuccess(input)
  }