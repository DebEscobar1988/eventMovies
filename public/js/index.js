window.onload = function(){
    //JavaScript del Index


const closeMenu = document.querySelector("#closeMenu")
      let container = document.querySelector('.container');
      container.style.display = 'block';

    const logoDH = document.querySelector( '.logoDH img');
   
    const boxMenu = document.getElementById('menu');


    logoDH.addEventListener("click", function(){
      boxMenu.classList.toggle("mostrar")
    })

/* boxMenu.addEventListener('mouseleave', function (){
  this.classList.remove('mostrar')
}) */

    closeMenu.addEventListener("click", function(){
      boxMenu.classList.remove("mostrar")
    })
   
    }
 
