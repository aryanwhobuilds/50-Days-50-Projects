const show = document.getElementById('open')
const hide = document.getElementById('close')
const container = document.querySelector('.container')

show.addEventListener('click', ()=>{

  container.classList.add('show-nav')
  rotateCircle();

})

hide.addEventListener('click', () => {


  container.classList.remove('show-nav')

})


