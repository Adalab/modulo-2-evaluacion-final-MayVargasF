"use strict";

function getDataApi(search = "", page = 1) {
  fetch(`https://api.jikan.moe/v4/anime?q=${search}&page=${page}`) //me parece que aquí tengo que montar la función con https://api.jikan.moe/v4/anime?q= + el resultado de la búsqueda pero no sé cómo hacerlo si uso el includes y entonces la búsqueda queda cortada, igual no se puede usar el includes.
    .then((response) => response.json())
    .then((info) => {
      animes = info.data;
      console.log(animes);
      renderAnimes(animes, listAnime);
    });
}

getDataApi();
