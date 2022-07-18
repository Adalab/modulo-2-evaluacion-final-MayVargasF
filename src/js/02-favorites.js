"use strict";

const favList = document.querySelector(".js_fav_list");
const deleteFav = document.querySelector(".js-deleteFav");

let favorites = [];

function handleClickFav(event) {
  const idSelected = event.currentTarget.id;
  const animeFound = animes.find(
    (anime) => anime.mal_id.toString() === idSelected.toString()
  );

  const favoriteFound = favorites.findIndex(
    (fav) => fav.mal_id.toString() === idSelected.toString()
  );

  if (favoriteFound === -1) {
    favorites.push(animeFound);
  } else {
    favorites.splice(favoriteFound, 1);
  }

  localStorage.setItem("favData", JSON.stringify(favorites));

  renderAnimes(favorites, favList);
  renderAnimes(animes, listAnime);
}

function handleClickDelete() {
  localStorage.removeItem("favData");
  favorites = [];
  renderAnimes(favorites, favList);
}

deleteFav.addEventListener("click", handleClickDelete);
