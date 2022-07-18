"use strict";

const listAnime = document.querySelector(".js_list_anime");

let animes = [];

// function listenerFavorites() {
//   const removeFav = document.querySelectorAll(".js_remove");

//   for (const li of removeFav) {
//     li.addEventListener("click", handleClickRemoveSelected);
//   }
// }

function listenerAnimes() {
  const liAnimes = document.querySelectorAll(".js_eachAnime");

  for (const li of liAnimes) {
    li.addEventListener("click", handleClickFav);
  }
}

function renderAnimes(arrayAnimes, place) {
  let html = "";
  let classFavorite = "";

  for (const eachAnime of arrayAnimes) {
    const favoriteFoundIndex = favorites.findIndex(
      (fav) => eachAnime.mal_id === fav.mal_id
    );

    if (
      favoriteFoundIndex !== -1 &&
      place.classList.contains("js_list_anime")
    ) {
      classFavorite = "animeList--favorite";
    } else {
      classFavorite = "";
    }

    html += `<li class="js_eachAnime ${classFavorite}" id="${eachAnime.mal_id}">`;
    html += `<div class="anime-container">`;
    html += `<div class="removecont"><h3>${eachAnime.title}</h3>`;
    if (place.classList.contains("js_fav_list")) {
      html += `<i class="fa-solid fa-circle-xmark js_remove"></i>`;
    }
    html += `</div><img src=${imagePlaceholder(eachAnime)} alt="${
      eachAnime.title
    } cover"/>`;
    html += `</div></li>`;
  }
  place.innerHTML = html;
  //listenerFavorites();
  listenerAnimes();
}
