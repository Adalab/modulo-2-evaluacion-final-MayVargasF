"use strict";

const searchBtn = document.querySelector(".js_searchBtn");
const searchInput = document.querySelector(".js_searchInput");

const handleClickSearch = (ev) => {
  ev.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  getDataApi(inputValue);
};

searchBtn.addEventListener("click", handleClickSearch);
