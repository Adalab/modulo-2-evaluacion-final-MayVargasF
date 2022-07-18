"use strict";

const resetBtn = document.querySelector(".js_resetBtn");

function handleClickReset(ev) {
  ev.preventDefault();
  searchInput.value = "";
  getDataApi();
  noResult.innerHTML = "";
  window.scrollTo(0, 0);
}

resetBtn.addEventListener("click", handleClickReset);
