"use strict";

const listAnime = document.querySelector(".js_list_anime");

let animes = [];
let favorites = [];

function handleClickAnime(event) {
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

  console.log(animeFound);

  console.log(favorites);

  renderAnimes();
}

function listenerAnimes() {
  const liAnimes = document.querySelectorAll(".js_eachAnime");

  for (const li of liAnimes) {
    li.addEventListener("click", handleClickAnime);
  }
}

function renderAnimes() {
  let html = "";
  let classFavorite = "";

  for (const eachAnime of animes) {
    const favoriteFoundIndex = favorites.findIndex(
      (fav) => eachAnime.mal_id === fav.mal_id
    );

    if (favoriteFoundIndex !== -1) {
      classFavorite = "animeList--favorite";
    } else {
      classFavorite = "";
    }

    html += `<li class="js_eachAnime ${classFavorite}" id="${eachAnime.mal_id}">`;
    html += `<div class="animeContainer">`;
    html += `<h3>${eachAnime.title}</h3>`;
    html += `<img src=${imagePlaceholder(eachAnime)} alt="${
      eachAnime.title
    } cover"/>`;
    html += `</div></li>`;
  }

  listAnime.innerHTML = html;
  listenerAnimes();
}

function imagePlaceholder(element) {
  if (
    element.images.jpg.image_url ===
    "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
  ) {
    ("https://via.placeholder.com/210x295/ffffff/666666/?text=TV");
  } else {
    return element.images.jpg.image_url;
  }
}

function getDataApi() {
  fetch("https://api.jikan.moe/v4/anime")
    .then((response) => response.json())
    .then((info) => {
      animes = info.data;
      console.log(animes);
      renderAnimes();
    });
}

getDataApi();
