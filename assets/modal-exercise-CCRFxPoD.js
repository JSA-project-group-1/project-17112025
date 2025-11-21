import{a as i,b as x}from"./vendor-D2ogNlHo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();i.defaults.baseURL="https://your-energy.b.goit.study/api/";async function D(e="Muscles",t="1",s="12"){return(await i.get("/filters",{params:{filter:e,page:t,limit:s}})).data}async function R(e,t,s,o=1,r=10){return(await i.get("/exercises",{params:{[e==="Body parts"?"bodypart":e.toLowerCase()]:t.toLowerCase().replace(" ","%20"),keyword:s,page:o,limit:r}})).data}async function w(e="64f389465ae26083f39b17a2"){return(await i.get(`/exercises/${e}`)).data}i.defaults.baseURL="https://your-energy.b.goit.study/api/";const L=async()=>{try{const{data:e}=await i.get("/quote");return console.log("Quote from API:",e),e}catch(e){throw console.error("Error fetching quote:",e),e}},S=()=>new Date().toISOString().split("T")[0],E=async()=>{const e=JSON.parse(localStorage.getItem("quoteOfTheDay")),t=S();if(e&&e.date===t)return console.log("Already have today's quote:",e),e;const o={...await L(),date:t};return localStorage.setItem("quoteOfTheDay",JSON.stringify(o)),o};async function N(){try{const e=await E(),t=document.querySelector(".quote-api-text"),s=document.querySelector(".quote-api-author");t&&(t.textContent=e.quote||"No quote available"),s&&(s.textContent=e.author||"Unknown author")}catch(e){console.error("Error rendering quote:",e)}}const u=document.querySelector(".burger"),n=document.querySelector(".mobile-menu"),m=document.querySelector(".mobile-menu__close");u&&n&&m&&(u.addEventListener("click",()=>{n.classList.add("open"),document.body.style.overflow="hidden"}),m.addEventListener("click",()=>{n.classList.remove("open"),document.body.style.overflow=""}),n.addEventListener("click",e=>{e.target===n&&(n.classList.remove("open"),document.body.style.overflow="")}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(n.classList.remove("open"),document.body.style.overflow="")}));const p=window.location.pathname,q=document.querySelectorAll(".nav-link");q.forEach(e=>{e.pathname===p&&e.classList.add("nav-link--active")});const k=document.querySelectorAll(".mobile-menu__links a");k.forEach(e=>{e.pathname===p&&e.classList.add("mobile-link--active"),e.addEventListener("click",()=>{n?.classList.remove("open"),document.body.style.overflow=""})});function M({gifUrl:e,name:t,rating:s,target:o,bodyPart:r,equipment:a,popularity:c,burnedCalories:y,description:b}){return`<section class="modal modal-exercise">
  <div class="modal-exercise-container">
    <img
      src="${e}"
      alt="${t}"
      class="modal-exercise-img"
      width="360"
      height="360"
    />
    <div class="modal-exercise-info-container">
      <button
        type="button"
        class="modal-exercise-close-btn"
        data-modal-exercise="close"
      >
        <svg class="modal-exercise-close-icon">
          <use href="./img/sport-sprite.svg#icon-cross"></use>
        </svg>
      </button>
      <h3 class="modal-exercise-title">${l(t)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${s}</p>
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${l(o)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${l(r)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${l(a)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Popular</p>
            <p class="modal-exercise-tag-value">${c}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Burned Calories</p>
            <p class="modal-exercise-tag-value">${y}</p>
          </li>
        </ul>
      </div>
      <p class="modal-exercise-description">${b}</p>
    </div>
  </div>
  <ul class="modal-exercise-btn-list">
    <li>
      <button type="button" class="modal-exercise-btn add-to-favorites-btn js-add-to-favorites-btn">
        Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>
      </button>
    </li>
    <li>
      <button type="button" class="modal-exercise-btn give-rating-btn js-give-rating-btn">
        Give a rating
      </button>
    </li>
  </ul>
</section>
  `}function f(){return`
  Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>`}function g(){return`
  Remove from favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon modal-favorite-active-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>
  `}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}class C{#e="Escape";options={onShow:t=>{t.element().querySelector(this.closeSelector).onclick=t.close,document.addEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="auto"}};constructor(t,s,o){this.markup=t,this.closeSelector=s,this.responceData=o,this.handleCloseModalKeyDownBound=this.handleCloseModalKeyDown.bind(this),this.build()}build(){this.instance=x.create(this.markup(this.responceData),this.options)}open(){this.instance.show()}handleCloseModalKeyDown(t){t.code===this.#e&&this.instance.close()}get closeKey(){return this.#e}set closeKey(t){this.#e=t}}const O='[data-modal-exercise="open"]',T='[data-modal-exercise="close"]',d="favorite_workouts";function h(){const e=localStorage.getItem(d);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch(t){return console.error("Failed to parse favorites from LS in modal:",t),localStorage.removeItem(d),[]}}function v(e){localStorage.setItem(d,JSON.stringify(e))}function _(e){return h().some(s=>s._id===e)}document.addEventListener("click",e=>{if(e.target.matches(O)){const t=e.target.dataset.exerciseId;A(t)}});async function A(e){let t={};const s=e||"64f389465ae26083f39b17a2";try{const o=await w(s);t=new C(M,T,o),t.open(),F(t,o)}catch(o){console.error("Error loading exercise data:",o)}}function F(e,t){const s=e.instance.element(),o=s.querySelector(".js-give-rating-btn"),r=s.querySelector(".js-add-to-favorites-btn");o&&o.addEventListener("click",a=>I(a,e)),r&&(r.addEventListener("click",a=>B(a,t,r)),_(t._id)?r.innerHTML=g():r.innerHTML=f())}function I(e,t){t.instance.close()}function B(e,t,s){const o=h();if(o.some(a=>a._id===t._id)){K(t._id,s,o);return}$(t,s,o)}function $(e,t,s){t.innerHTML=g();const o={_id:e._id,time:e.time,target:e.target,name:e.name,burnedCalories:e.burnedCalories,bodyPart:e.bodyPart};s.push(o),v(s)}function K(e,t,s){const o=s.filter(r=>r._id!==e);o.length===0?localStorage.removeItem(d):v(o),t.innerHTML=f()}export{D as a,R as f,N as r};
//# sourceMappingURL=modal-exercise-CCRFxPoD.js.map
