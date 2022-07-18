"use strict";

const resetBtn = document.querySelector(".js_resetBtn");

function handleClickReset(ev) {
  ev.preventDefault();
  searchInput.value = "";
  getDataApi();
}

resetBtn.addEventListener("click", handleClickReset);
