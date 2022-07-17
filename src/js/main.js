"use strict";

const listAnime = document.querySelector(".js_list_anime");
const searchBtn = document.querySelector(".js_searchBtn");
const searchInput = document.querySelector(".js_searchInput");
const favList = document.querySelector(".js_fav_list");

let animes = [];
let favorites = [];

function favStorage() {
  const dataLocalStorage = JSON.parse(localStorage.getItem("favData"));

  if (dataLocalStorage) {
    favList.innerHTML = html;
  } else {
    favList.innerHTML ='',
  }
}

const handleClickSearch = (ev) => {
  ev.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  const animeFilter = animes.filter((anime) =>
    anime.title.toLowerCase().includes(inputValue)
  );
  console.log(animeFilter);
  renderAnimes(animeFilter);
};

searchBtn.addEventListener("click", handleClickSearch);

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

  localStorage.setItem('favData',JSON.stringify(favorites));

  renderAnimes(animes);
}

function listenerAnimes() {
  const liAnimes = document.querySelectorAll(".js_eachAnime");

  for (const li of liAnimes) {
    li.addEventListener("click", handleClickAnime);
  }
}

function renderAnimes(arrayAnimes) {
  let html = "";
  let classFavorite = "";

  for (const eachAnime of arrayAnimes) {
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
      renderAnimes(animes);
    });
}

getDataApi();
