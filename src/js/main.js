"use strict";

const listAnime = document.querySelector(".js_list_anime");

let animes = [];
let favorites = [];

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

fetch("https://api.jikan.moe/v4/anime")
  .then((response) => response.json())
  .then((info) => {
    animes = info.data;
    console.log(animes);

    let html = "";

    for (const eachAnime of animes) {
      html += `<li>`;
      html += `<div class="animeContainer">`;
      html += `<h3>${eachAnime.title}</h3>`;
      html += `<img src=${imagePlaceholder(eachAnime)} alt="${
        eachAnime.title
      } cover"/>`;
      html += `</div></li>`;
    }

    listAnime.innerHTML = html;
  });
