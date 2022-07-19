"use strict";

function favStorage() {
  const dataLocalStorage = JSON.parse(localStorage.getItem("favData"));

  if (dataLocalStorage) {
    favorites = dataLocalStorage;
    renderAnimes(favorites, favList);
  } else {
    favList.innerHTML = "";
  }

  favInfo();
}

favStorage();
