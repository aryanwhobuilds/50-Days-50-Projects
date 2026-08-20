const button = document.getElementById('btn')
const srchBar = document.querySelector('.srch-bar')

button.addEventListener('click', ()=>{
  srchBar.classList.toggle('active')
})