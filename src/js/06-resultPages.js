"use strict";

let pagination = {};

const previousBtn = document.querySelector(".js_previousBtn");
const nextBtn = document.querySelector(".js_nextBtn");
const paginationMsg = document.querySelector(".js_pagination");

function pageInfo() {
  paginationMsg.innerHTML = `${pagination.current_page} de ${pagination.last_visible_page}`;
}

function handleClickPrevious() {
  const inputValue = searchInput.value.toLowerCase();

  getDataApi(inputValue, parseInt(pagination.current_page) - 1);

  pageInfo();

  window.scrollTo(0, 0);
}

previousBtn.addEventListener("click", handleClickPrevious);

function handleClickNext() {
  const inputValue = searchInput.value.toLowerCase();

  getDataApi(
    inputValue,
    pagination.has_next_page
      ? pagination.current_page + 1
      : pagination.current_page
  );

  pageInfo();

  window.scrollTo(0, 0);
}

nextBtn.addEventListener("click", handleClickNext);
