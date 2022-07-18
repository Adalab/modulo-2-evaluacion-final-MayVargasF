"use strict";

const searchBtn = document.querySelector(".js_searchBtn");
const searchInput = document.querySelector(".js_searchInput");
const noResult = document.querySelector(".js_noResults");

const handleClickSearch = (ev) => {
  ev.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  getDataApi(inputValue);

  if (animes.length === 0) {
    noResult.innerHTML = `Lo sentimos, no hay resultados. Inténtalo de nuevo con otra serie.`;
  } else {
    noResult.innerHTML = "";
  }
};

searchBtn.addEventListener("click", handleClickSearch);
