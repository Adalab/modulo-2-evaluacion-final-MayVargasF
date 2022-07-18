"use strict";

function imagePlaceholder(element) {
  return element.images.jpg.image_url ===
    "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    ? "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
    : element.images.jpg.image_url;
}
