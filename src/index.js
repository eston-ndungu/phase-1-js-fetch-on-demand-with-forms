const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    console.log(event)
    const input = document.querySelector('input#searchByID')

    console.log(input.value)
    fetch('http://localhost:3000/movies/${input.value}')
    .then(response => response.json())
    .then((data)=>{
        const title = document.querySelector('section#movieDetailsh4')
        const summary = document.querySelector('section#movieDetailsp')

        title.innerText = data.title;
        summary.innerText = data.summary;
    })
  })
}

document.addEventListener('DOMContentLoaded', init);