window.onload = function () {
  const $ = (id) => document.getElementById(id);

  let body = document.querySelector("body");
  let moviesListTitulo = document.querySelector(".moviesListTitulo");
  let listMoviesA = document.querySelectorAll(".listMovies a");
  let listMovies = document.querySelectorAll(".listMovies");
  let contenedorImagen = document.querySelector(".contenedorImagen");

  /*   $('logoDH').addEventListener('mouseover',()=>{
     body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
   })
   */
  $("buttonDark").addEventListener("click", function () {
    if (this.textContent == "modo oscuro") {
      body.style.backgroundColor = "#0a0908";
      contenedorImagen.style.display = "none";
      body.classList.add("fondoMoviesList");
      this.textContent = "modo claro";
      listMoviesA.forEach((element) => {
        element.style.color = "white";
      });
      listMovies.forEach((element) => {
        element.style.color = "white";
      });
    } else {
      contenedorImagen.style.display = "block";
      body.style.backgroundColor = "#ffffff";
      body.classList.remove("fondoMoviesList");

      this.textContent = "modo oscuro";
      listMoviesA.forEach((element) => {
        element.style.color = "black";
      });

      listMovies.forEach((element) => {
        element.style.color = "black";
      });
    }
  });

  moviesListTitulo.innerHTML = "LISTADO DE PELÍCULAS";
  moviesListTitulo.style.backgroundColor = "#4D908E";
  moviesListTitulo.style.padding = "20px";
  moviesListTitulo.style.width = "50%";
  moviesListTitulo.style.height = "110px";
  moviesListTitulo.style.border = "2px solid #014f86";
};
