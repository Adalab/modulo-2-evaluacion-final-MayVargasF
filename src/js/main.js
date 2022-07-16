"use strict";

const listAnime = document.querySelector(".js_list_anime");

let animes = [];
let favorites = [];

fetch("https://api.jikan.moe/v4/anime")
  .then((response) => response.json())
  .then((info) => {
    animes = info.data;
  });
