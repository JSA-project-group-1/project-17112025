import"./assets/header-DJd-5JJA.js";import{a as m,i as h,b as F}from"./assets/vendor-D2ogNlHo.js";m.defaults.baseURL="https://your-energy.b.goit.study/api/";async function D(t="Muscles",e="1",s="12"){return(await m.get("/filters",{params:{filter:t,page:e,limit:s}})).data}async function q(t,e,s,a=1,o=10){return(await m.get("/exercises",{params:{[t==="Body parts"?"bodypart":t.toLowerCase()]:e.toLowerCase().replace(" ","%20"),keyword:s,page:a,limit:o}})).data}async function H(t="64f389465ae26083f39b17a2"){return(await m.get(`/exercises/${t}`)).data}function I(t,e){const s=t.map(({filter:a,imgURL:o,name:i})=>`
          <li class="categories-item" data-name="${i}">
            <img
            class="category-image"
            src="${o}"
            alt="${i}"
          />
          <div class="categories-item-info">
            <h3>${i}</h3>
            <p>${a}</p>
            </div>
          </li>
      `).join("");e.innerHTML=s}function w(t,e){const s=t.map(({_id:a,name:o,target:i,bodyPart:n,burnedCalories:u,rating:c})=>`
    <li class="exercises-item">
    <div class="header">
        <div class = "workout-rating">
        <span class="type">WORKOUT</span>
        <span class="rating">${c} </span>
        </div>
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${a}"> Start </button>
    </div>
    <div class="title">
        <span class="icon">icon</span> ${o}
    </div>
    <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${u} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span>
            <span class="body-part-value">${n}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${i}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");e.innerHTML=s}function y(t,e,s){const o=Array.from({length:t},(i,n)=>n+1).map(i=>`
          <li class="pagination-control-item">
            <button class="${e===i?"pagination-control-active":"pagination-control"}" data-page="${i}">${i}</button>
          </li>
      `).join("");s.innerHTML=o}function O(t,e,s){const a=t.map(o=>`
          <li class="filters-list-item ${e===o?"filters-list-item-active":""}" data-option="${o}"><p>${o}</p></li>
      `).join("");s.innerHTML=a}m.defaults.baseURL="https://your-energy.b.goit.study/api/";const j=async()=>{try{const{data:t}=await m.get("/quote");return console.log("Quote from API:",t),t}catch(t){throw console.error("Error fetching quote:",t),t}},K=()=>new Date().toISOString().split("T")[0],_=async()=>{const t=JSON.parse(localStorage.getItem("quoteOfTheDay")),e=K();if(t&&t.date===e)return console.log("Already have today's quote:",t),t;const a={...await j(),date:e};return localStorage.setItem("quoteOfTheDay",JSON.stringify(a)),a};async function Q(){try{const t=await _(),e=document.querySelector(".quote-api-text"),s=document.querySelector(".quote-api-author");e&&(e.textContent=t.quote||"No quote available"),s&&(s.textContent=t.author||"Unknown author")}catch(t){console.error("Error rendering quote:",t)}}const f=document.getElementById("footerSubscribeForm");if(f){let a=function(n){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)},o=function(n){h.success({title:"Success",message:n,position:"topRight",timeout:5e3})},i=function(n){h.error({title:"Error",message:n,position:"topRight",timeout:5e3})};const t=f.querySelector('input[name="email"]'),e=f.querySelector('button[type="submit"]');f.addEventListener("submit",s);async function s(n){n.preventDefault();const u=t.value.trim();if(!a(u)){i("Invalid email address");return}try{e.disabled=!0;const c=await m.post("https://your-energy.b.goit.study/api/subscription",{email:u},{headers:{"Content-Type":"application/json"}});c.status===201&&(o(c.data.message),f.reset())}catch(c){c.response?i(c.response.data.message||"Subscription failed"):i("Network error. Please try again.")}finally{e.disabled=!1}}}function U({gifUrl:t,name:e,rating:s,target:a,bodyPart:o,equipment:i,popularity:n,burnedCalories:u,description:c}){return`<section class="modal modal-exercise">
  <div class="modal-exercise-container">
    <img
      src="${t}"
      alt="${e}"
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
      <h3 class="modal-exercise-title">${S(e)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${s}</p>
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${S(a)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${S(o)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${S(i)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Popular</p>
            <p class="modal-exercise-tag-value">${n}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Burned Calories</p>
            <p class="modal-exercise-tag-value">${u}</p>
          </li>
        </ul>
      </div>
      <p class="modal-exercise-description">${c}</p>
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
  `}function J(){return`
  Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>`}function B(){return`
  Remove from favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon modal-favorite-active-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>
  `}function S(t){return t.charAt(0).toUpperCase()+t.slice(1)}class z{#e="Escape";options={onShow:e=>{e.element().querySelector(this.closeSelector).onclick=e.close,document.addEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="auto"}};constructor(e,s,a){this.markup=e,this.closeSelector=s,this.responceData=a,this.handleCloseModalKeyDownBound=this.handleCloseModalKeyDown.bind(this),this.build()}build(){this.instance=F.create(this.markup(this.responceData),this.options)}open(){this.instance.show()}handleCloseModalKeyDown(e){e.code===this.#e&&this.instance.close()}get closeKey(){return this.#e}set closeKey(e){this.#e=e}}const G='[data-modal-exercise="open"]',V='[data-modal-exercise="close"]',E="favorite-id-list",l=JSON.parse(localStorage.getItem(E))||[];document.addEventListener("click",t=>{if(t.target.matches(G)){const e=t.target.dataset.exerciseId;W(e)}});async function W(t){let e={};const s=t||"64f389465ae26083f39b17a2";try{const a=await H(s);e=new z(U,V,a),e.open(),Z(e,s)}catch(a){console.error("Error loading exercise data:",a)}}function Z(t,e){const s=t.instance.element(),a=s.querySelector(".js-give-rating-btn"),o=s.querySelector(".js-add-to-favorites-btn");a&&a.addEventListener("click",i=>X(i,t)),o&&(o.addEventListener("click",i=>Y(i,e,o)),l.includes(e)&&(o.innerHTML=B()))}function X(t,e){e.instance.close()}function Y(t,e,s){if(l.includes(e)){te(e,s),se();return}ee(e,s)}function ee(t,e){e.innerHTML=B(),l.push(t);const s=JSON.stringify(l);localStorage.setItem(E,s)}function te(t,e){const s=l.indexOf(t);l.splice(s,1);const a=JSON.stringify(l);localStorage.setItem(E,a),e.innerHTML=J()}function se(){l.length===0&&localStorage.removeItem(E)}const M=["Muscles","Body parts","Equipment"],ae=375,T=document.querySelector("ul.filters-list"),v=document.querySelector("ul.block-categories-list"),x=document.querySelector("ul.exercises-list"),r=document.querySelector("ul.pagination-controls-list"),g=document.querySelector("span.loader"),L=document.querySelector("form.search-form"),N=L.querySelector(".search-input"),k=document.querySelector("button.clear-btn"),R=document.documentElement.clientWidth<=ae;let d=M[0],b="",p="",$=1,P=R?9:12,C=R?8:10;L.addEventListener("input",t=>{p=t.target.value,p.length?k.classList.remove("visually-hidden"):k.classList.add("visually-hidden")});L.addEventListener("submit",async t=>{t.preventDefault();try{const e=await q(d,b,p,$,C),{results:s,page:a,totalPages:o}=e;r.innerHTML="",w(s,x),y(Number(o),Number(a),r)}catch(e){g.classList.add("visually-hidden"),h.error({icon:"",position:"topRight",message:e.message})}});k.addEventListener("click",async()=>{p="",N.value="",k.classList.add("visually-hidden"),w(results,x),y(Number(totalPages),Number(page),r)});async function A(){v.innerHTML="",x.innerHTML="",r.innerHTML="",g.classList.remove("visually-hidden");try{const t=await D(d,$,P),{results:e,page:s,totalPages:a}=t;I(e,v),y(Number(a),Number(s),r),g.classList.add("visually-hidden")}catch(t){g.classList.add("visually-hidden"),h.error({icon:"",position:"topRight",message:t.message})}}T.addEventListener("click",oe);function oe(t){const e=t.target.closest(".filters-list-item");e&&(d=e.dataset.option,A(),O(M,d,T),L.classList.add("visually-hidden"),p="",N.value="")}v.addEventListener("click",ie);async function ie(t){const e=t.target.closest(".categories-item");if(e){b=e.dataset.name;try{const s=await q(d,b,p,$,C),{results:a,page:o,totalPages:i}=s;v.innerHTML="",r.innerHTML="",w(a,x),y(Number(i),Number(o),r),L.classList.remove("visually-hidden")}catch(s){g.classList.add("visually-hidden"),h.error({icon:"",position:"topRight",message:s.message})}}}r.addEventListener("click",ne);async function ne(t){const e=t.target.closest("button[data-page]");if(e){const s=parseInt(e.dataset.page,10);try{if(b){const a=await q(d,b,p,s,C),{results:o,page:i,totalPages:n}=a;w(o,x),y(Number(n),Number(i),r)}else{console.log(1);const a=await D(d,s,P),{results:o,page:i,totalPages:n}=a;I(o,v),y(Number(n),Number(i),r)}}catch(a){g.classList.add("visually-hidden"),h.error({icon:"",position:"topRight",message:a.message})}}}document.addEventListener("DOMContentLoaded",Q);O(M,d,T);A();
//# sourceMappingURL=index.js.map
