"use strict";

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
    html += `<div class="animeContainer">`;
    html += `<h3>${eachAnime.title}</h3>`;
    html += `<img src=${imagePlaceholder(eachAnime)} alt="${
      eachAnime.title
    } cover"/>`;
    html += `</div></li>`;
  }
  place.innerHTML = html;
  listenerAnimes();
}
