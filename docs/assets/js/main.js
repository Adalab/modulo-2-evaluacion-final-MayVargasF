"use strict";function getDataApi(e="",t=1){fetch(`https://api.jikan.moe/v4/anime?q=${e}&page=${t}`).then(e=>e.json()).then(e=>{animes=e.data,pagination=e.pagination,0===animes.length?noResult.innerHTML="Lo sentimos, no hay resultados. Inténtalo de nuevo con otra serie.":noResult.innerHTML="",renderAnimes(animes,listAnime),pageInfo()})}getDataApi();const listAnime=document.querySelector(".js_list_anime");let animes=[];function listenerFavorites(){const e=document.querySelectorAll(".js_remove");for(const t of e)t.addEventListener("click",handleClickRemoveSelected)}function listenerAnimes(){const e=document.querySelectorAll(".js_eachAnime");for(const t of e)t.addEventListener("click",handleClickFav)}function renderAnimes(e,t){let n="",i="",a="js_eachAnime";for(const s of e){i=-1!==favorites.findIndex(e=>s.mal_id===e.mal_id)&&t.classList.contains("js_list_anime")?"animeList--favorite":"",a=t.classList.contains("js_list_anime")?"js_eachAnime":"",n+=`<li class="${a} ${i}" id="${s.mal_id}">`,n+='<div class="anime-container">',n+=`<div class="removecont"><h3>${s.title}</h3>`,t.classList.contains("js_fav_list")&&(n+='<i class="fa-solid fa-circle-xmark js_remove"></i>'),n+=`</div><img src=${imagePlaceholder(s)} alt="${s.title} cover"/>`,n+="</div></li>"}t.innerHTML=n,listenerFavorites(),listenerAnimes()}function render(){renderAnimes(favorites,favList),renderAnimes(animes,listAnime)}function imagePlaceholder(e){return"https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"===e.images.jpg.image_url?"https://via.placeholder.com/210x295/ffffff/666666/?text=TV":e.images.jpg.image_url}const favList=document.querySelector(".js_fav_list"),deleteFav=document.querySelector(".js-deleteFav");let favorites=[];function handleClickFav(e){const t=e.currentTarget.id,n=animes.find(e=>e.mal_id.toString()===t.toString()),i=favorites.findIndex(e=>e.mal_id.toString()===t.toString());-1===i?favorites.push(n):favorites.splice(i,1),localStorage.setItem("favData",JSON.stringify(favorites)),render()}function handleClickDelete(){localStorage.removeItem("favData"),favorites=[],render()}function handleClickRemoveSelected(e){const t=e.srcElement.parentElement.parentElement.parentElement.id,n=favorites.findIndex(e=>e.mal_id.toString()===t.toString());favorites.splice(n,1),render()}function favStorage(){const e=JSON.parse(localStorage.getItem("favData"));e?(favorites=e,renderAnimes(favorites,favList)):favList.innerHTML=""}deleteFav.addEventListener("click",handleClickDelete),favStorage();let pagination={};const previousBtn=document.querySelector(".js_previousBtn"),nextBtn=document.querySelector(".js_nextBtn"),paginationMsg=document.querySelector(".js_pagination");function pageInfo(){paginationMsg.innerHTML=`${pagination.current_page} de ${pagination.last_visible_page}`}function handleClickPrevious(){getDataApi(searchInput.value.toLowerCase(),parseInt(pagination.current_page)-1),pageInfo(),window.scrollTo(0,0)}function handleClickNext(){getDataApi(searchInput.value.toLowerCase(),pagination.has_next_page?pagination.current_page+1:pagination.current_page),pageInfo(),window.scrollTo(0,0)}previousBtn.addEventListener("click",handleClickPrevious),nextBtn.addEventListener("click",handleClickNext);const searchBtn=document.querySelector(".js_searchBtn"),searchInput=document.querySelector(".js_searchInput"),noResult=document.querySelector(".js_noResults"),handleClickSearch=e=>{e.preventDefault();getDataApi(searchInput.value.toLowerCase()),pageInfo()};searchBtn.addEventListener("click",handleClickSearch);const resetBtn=document.querySelector(".js_resetBtn");function handleClickReset(e){e.preventDefault(),searchInput.value="",getDataApi(),noResult.innerHTML="",window.scrollTo(0,0)}resetBtn.addEventListener("click",handleClickReset);