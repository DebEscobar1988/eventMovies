window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
   

titulo.addEventListener('mouseover', function(){
    this.style.color = this.style.color === 'red' ? 'green': 'red'
})

const inputTitulo = document.querySelector('#titulo');
 let estadoSecreto = 0
let palabraMagica = ["s","e","c","r","e","t","o"]


inputTitulo.addEventListener('keyup', (event)=>{
for ( let index = 0; index <= palabraMagica.length; index++) {
if(event.key === palabraMagica[index]){
    estadoSecreto++
}
if (estadoSecreto == 9) {
    Swal.fire({
        title: 'SECRETO MÁGICO',
        imageUrl:"https://www.sopitas.com/wp-content/uploads/2015/01/estrellas_05.png",
        imageWidth: 200,
        imageHeight: 300,
        imageAlt: 'Custom image',
        timer: 1500
      })

    estadoSecreto = 0
} 
}

})

}