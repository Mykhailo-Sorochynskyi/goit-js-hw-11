import{S as m,i as g}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function h(s){let i=`https://pixabay.com/api/?key=46450573-9b5e41256c0ad0f1dd9121c30&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(e=>{if(e.ok)return e.json();throw new Error(e.status)})}const p=document.querySelector(".wrapp"),l=document.querySelector(".list");function c(s,o){if(s.total===0){l.innerHTML="";return}else{f();const i=s.hits.map(e=>`<li class="list-item"><a href="${e.largeImageURL}" data-source="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" /></a>
          <div class="wrapp-items">
          <div class="info-item"><p class="bold">Likes</p>
          <p>${e.likes}</p>
          </div>
          <div class="info-item"><p class="bold">Views</p>
          <p>${e.views}</p>
          </div>
          <div class="info-item"><p class="bold">Comments</p>
          <p>${e.comments}</p>
          </div>
          <div class="info-item"><p class="bold">Downloads</p>
          <p>${e.downloads}</p>
          </div>

          </div></li>`).join("");return l.innerHTML=i,o.refresh(),!0}}function y(){p.style.display="block"}function f(){p.style.display="none"}let u=new m(".list a",{captions:!0,captionsData:"alt",captionDelay:250,loop:!0});const v=document.querySelector(".form"),d=document.querySelector(".user-input");let n;v.addEventListener("submit",s=>{s.preventDefault(),d.value.trim()?n=d.value.trim():n=void 0,n&&(y(),h(n).then(o=>{if(c(o,u))return c(o,u);throw new Error("Test error!")}).catch(o=>{g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:18,messageLineHeight:30,position:"topRight"}),f()}))});
//# sourceMappingURL=index.js.map
