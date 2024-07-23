const images = [
    "imagens/imagemOne.png",
    "imagens/imagemTwo.png",
    "imagens/imagenTree.png"
]

let currentIndex = 0

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', function(){
    currentIndex++
    if(currentIndex >= images.length){
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]
})