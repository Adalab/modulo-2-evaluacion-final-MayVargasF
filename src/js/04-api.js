"use strict";

function getDataApi(search = "", page = 1) {
  fetch(`https://api.jikan.moe/v4/anime?q=${search}&page=${page}`)
    .then((response) => response.json())
    .then((info) => {
      animes = info.data;
      pagination = info.pagination;
      renderAnimes(animes, listAnime);
    });
}

getDataApi();
