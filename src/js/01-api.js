"use strict";

function getDataApi(search = "", page = 1) {
  fetch(`https://api.jikan.moe/v4/anime?q=${search}&page=${page}`)
    .then((response) => response.json())
    .then((info) => {
      animes = info.data;
      pagination = info.pagination;

      if (animes.length === 0) {
        noResult.innerHTML = `Lo sentimos, no hay resultados. Inténtalo de nuevo con otra serie.`;
      } else {
        noResult.innerHTML = "";
      }

      renderAnimes(animes, listAnime);

      pageInfo();
    });
}

getDataApi();
