const text = "Desenvolvedor Front-end"
const typingElement = document.getElementById("typing")
let index = 0

// função para digitar texto
function typeEffect(){
  if(index < text.length) {
    typingElement.textContent += text.charAt(index)
    index++
    setTimeout(typeEffect,150)
  }
}

window.onload = () => {
  setTimeout(() => {
    document.querySelector('.welcome-screen').classList.add('hide')
    typeEffect();
  },1000)
}