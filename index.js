import{i as d,S as u}from"./assets/vendor-BcHgwmCV.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f="21847975-d0fb10f6989c918e9c55b7840";function p(s,r=10,a="photo",i="horizontal",e=!0){return fetch("https://pixabay.com/api/?key="+f+"&q="+s+"&per_page="+r+"&image_type="+a+"&orientation="+i+"&safesearch="+e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(s,r){const a=s.map(i=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${i.largeImageURL}">
              <img
                class="gallery-image"
                src="${i.webformatURL}"
                alt="${i.tags}"
              />
              <ul class="image-details">
                <li class="image-details-item">
                  <p>Likes</p>
                  <p>${i.likes}</p>
                </li>
                <li class="image-details-item">
                  <p>Views</p>
                  <p>${i.views}</p>
                </li>
                <li class="image-details-item">
                  <p>Comments</p>
                  <p>${i.comments}</p>
                </li>
                <li class="image-details-item">
                  <p>Downloads</p>
                  <p>${i.downloads}</p>
                </li>
              </ul>
            </a>
          </li>
      `).join("");r.insertAdjacentHTML("beforeend",a)}let o="";const c=document.querySelector("form.form"),m=document.querySelector("ul.gallery"),n=document.querySelector("div.loader-box");c.addEventListener("input",s=>{o=s.target.value});c.addEventListener("submit",s=>{if(s.preventDefault(),!o){d.warning({icon:"",position:"topRight",message:"Please, fill the search field"});return}m.innerHTML="",n.classList.remove("visually-hidden"),p(o,24).then(r=>{if(n.classList.add("visually-hidden"),!r.total)throw new Error("Sorry, there are no images matching your search query. Please try again!");g(r.hits,m),h.refresh()}).catch(r=>{n.classList.add("visually-hidden"),d.error({icon:"",position:"topRight",message:r.message})}),o="",c.reset()});var h=new u("ul.gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
