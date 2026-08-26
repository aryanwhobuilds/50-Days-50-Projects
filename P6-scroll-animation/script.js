const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBox)

checkBox()

function checkBox(){
const triggerdPoint = window.innerHeight / 5 * 4 ;

boxes.forEach((box)=>{

  const boxTop = box.getBoundingClientRect().top

  if (boxTop < triggerdPoint) {

    box.classList.add('show')
    
  } else {
    box.classList.remove('show')
  }


})
  
}