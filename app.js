const input = document.querySelector('.main_input'),
   btnGo = document.querySelector('.input_btn'),
   resultText = document.querySelector('.todoList_ul'),
   nambr = document.querySelector('.namber');


   let i = 0

btnGo.addEventListener('click', (e) => {
   if (input.value === '') return

   addLiElem(input.value)
   input.value = ''
})

function addLiElem(value) {
   
   i++


   const li = document.createElement('li')
   const btnRemove = document.createElement('button')
  


   li.classList = 'todoList_span'
   li.textContent = value

   btnRemove.classList = 'btn main__todoList-btn'
   btnRemove.textContent = 'remove'
   li.appendChild(btnRemove)


   btnRemove.addEventListener('click', () => {
      i--
      nambr.textContent = i
      resultText.removeChild(li)
      
   })


   li.addEventListener('click', () => {
      li.classList.toggle('active')
   })

   nambr.textContent = i


   resultText.appendChild(li)
}
