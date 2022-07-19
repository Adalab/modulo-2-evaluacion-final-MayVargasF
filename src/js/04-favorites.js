"use strict";

const favList = document.querySelector(".js_fav_list");
const deleteFav = document.querySelector(".js-deleteFav");
const favMsg = document.querySelector(".js_noFavorites");

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

  render();
  favInfo();
}

function handleClickDelete() {
  localStorage.removeItem("favData");
  favorites = [];
  render();
  favInfo();
}

deleteFav.addEventListener("click", handleClickDelete);

function handleClickRemoveSelected(event) {
  const idSelected =
    event.srcElement.parentElement.parentElement.parentElement.id;

  const favoriteFound = favorites.findIndex(
    (fav) => fav.mal_id.toString() === idSelected.toString()
  );

  favorites.splice(favoriteFound, 1);

  render();
  favInfo();
}

function favInfo() {
  if (favorites.length === 0) {
    favMsg.innerHTML = `Todavía no tienes ninguna serie favorita. Haz click sobre tus series favoritas para empezar a guardarlas.`;
  } else {
    favMsg.innerHTML = "";
  }
}
