"use strict";

const listAnime = document.querySelector(".js_list_anime");

let animes = [];
let favorites = [];

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
      html += `<img src=${eachAnime.images.jpg.image_url} alt="${eachAnime.title} cover"/>`;
      html += `</div></li>`;
    }

    listAnime.innerHTML = html;
  });
