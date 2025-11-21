import"./assets/header-ldqI37b5.js";import{a as y,i as h,b as Q}from"./assets/vendor-D2ogNlHo.js";y.defaults.baseURL="https://your-energy.b.goit.study/api/";async function O(t="Muscles",e="1",s="12"){return(await y.get("/filters",{params:{filter:t,page:e,limit:s}})).data}async function C(t,e,s,a=1,o=10){return(await y.get("/exercises",{params:{[t==="Body parts"?"bodypart":t.toLowerCase()]:e.toLowerCase().replace(" ","%20"),keyword:s,page:a,limit:o}})).data}async function U(t="64f389465ae26083f39b17a2"){return(await y.get(`/exercises/${t}`)).data}function N(t,e){const s=t.map(({filter:a,imgURL:o,name:i})=>`
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
      `).join("");e.innerHTML=s}function k(t,e){const s=t.map(({_id:a,name:o,target:i,bodyPart:n,burnedCalories:m,rating:c})=>`
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
            <span class="calories-value">${m} / 3 min</span>
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
      `).join("");e.innerHTML=s}function f(t,e,s){const o=Array.from({length:t},(i,n)=>n+1).map(i=>`
          <li class="pagination-control-item">
            <button class="${e===i?"pagination-control-active":"pagination-control"}" data-page="${i}">${i}</button>
          </li>
      `).join("");s.innerHTML=o}function R(t,e,s){const a=t.map(o=>`
          <li class="filters-list-item ${e===o?"filters-list-item-active":""}" data-option="${o}"><p>${o}</p></li>
      `).join("");s.innerHTML=a}y.defaults.baseURL="https://your-energy.b.goit.study/api/";const J=async()=>{try{const{data:t}=await y.get("/quote");return console.log("Quote from API:",t),t}catch(t){throw console.error("Error fetching quote:",t),t}},z=()=>new Date().toISOString().split("T")[0],G=async()=>{const t=JSON.parse(localStorage.getItem("quoteOfTheDay")),e=z();if(t&&t.date===e)return console.log("Already have today's quote:",t),t;const a={...await J(),date:e};return localStorage.setItem("quoteOfTheDay",JSON.stringify(a)),a};async function V(){try{const t=await G(),e=document.querySelector(".quote-api-text"),s=document.querySelector(".quote-api-author");e&&(e.textContent=t.quote||"No quote available"),s&&(s.textContent=t.author||"Unknown author")}catch(t){console.error("Error rendering quote:",t)}}const v=document.getElementById("footerSubscribeForm");if(v){let a=function(n){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)},o=function(n){h.success({title:"Success",message:n,position:"topRight",timeout:5e3})},i=function(n){h.error({title:"Error",message:n,position:"topRight",timeout:5e3})};const t=v.querySelector('input[name="email"]'),e=v.querySelector('button[type="submit"]');v.addEventListener("submit",s);async function s(n){n.preventDefault();const m=t.value.trim();if(!a(m)){i("Invalid email address");return}try{e.disabled=!0;const c=await y.post("https://your-energy.b.goit.study/api/subscription",{email:m},{headers:{"Content-Type":"application/json"}});c.status===201&&(o(c.data.message),v.reset())}catch(c){c.response?i(c.response.data.message||"Subscription failed"):i("Network error. Please try again.")}finally{e.disabled=!1}}}function W({gifUrl:t,name:e,rating:s,target:a,bodyPart:o,equipment:i,popularity:n,burnedCalories:m,description:c}){return`<section class="modal modal-exercise">
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
      <h3 class="modal-exercise-title">${w(e)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${s}</p>
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${w(a)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${w(o)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${w(i)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Popular</p>
            <p class="modal-exercise-tag-value">${n}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Burned Calories</p>
            <p class="modal-exercise-tag-value">${m}</p>
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
  `}function Z(){return`
  Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>`}function F(){return`
  Remove from favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon modal-favorite-active-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>
  `}function w(t){return t.charAt(0).toUpperCase()+t.slice(1)}class Y{#e="Escape";options={onShow:e=>{e.element().querySelector(this.closeSelector).onclick=e.close,document.addEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="auto"}};constructor(e,s,a){this.markup=e,this.closeSelector=s,this.responceData=a,this.handleCloseModalKeyDownBound=this.handleCloseModalKeyDown.bind(this),this.build()}build(){this.instance=Q.create(this.markup(this.responceData),this.options)}open(){this.instance.show()}handleCloseModalKeyDown(e){e.code===this.#e&&this.instance.close()}get closeKey(){return this.#e}set closeKey(e){this.#e=e}}const X='[data-modal-exercise="open"]',ee='[data-modal-exercise="close"]',q="favorite-id-list",l=JSON.parse(localStorage.getItem(q))||[];document.addEventListener("click",t=>{if(t.target.matches(X)){const e=t.target.dataset.exerciseId;te(e)}});async function te(t){let e={};const s=t||"64f389465ae26083f39b17a2";try{const a=await U(s);e=new Y(W,ee,a),e.open(),se(e,s)}catch(a){console.error("Error loading exercise data:",a)}}function se(t,e){const s=t.instance.element(),a=s.querySelector(".js-give-rating-btn"),o=s.querySelector(".js-add-to-favorites-btn");a&&a.addEventListener("click",i=>ae(i,t)),o&&(o.addEventListener("click",i=>oe(i,e,o)),l.includes(e)&&(o.innerHTML=F()))}function ae(t,e){e.instance.close()}function oe(t,e,s){if(l.includes(e)){ne(e,s),re();return}ie(e,s)}function ie(t,e){e.innerHTML=F(),l.push(t);const s=JSON.stringify(l);localStorage.setItem(q,s)}function ne(t,e){const s=l.indexOf(t);l.splice(s,1);const a=JSON.stringify(l);localStorage.setItem(q,a),e.innerHTML=Z()}function re(){l.length===0&&localStorage.removeItem(q)}function T(t){if(!t)return;let e=t.querySelector(".local-loader-wrapper");e||(e=document.createElement("div"),e.classList.add("local-loader-wrapper"),e.innerHTML=`
      <div class="hypnotic"></div>
    `,t.style.position="relative",t.appendChild(e)),e.classList.remove("hidden")}function M(t){if(!t)return;const e=t.querySelector(".local-loader-wrapper");e&&e.classList.add("hidden")}const $=["Muscles","Body parts","Equipment"],ce=375,H=document.querySelector("span.slash"),A=document.querySelector("p.current-category"),le=document.querySelector("p.warning"),D=document.querySelector("ul.filters-list"),b=document.querySelector("ul.block-categories-list"),x=document.querySelector("ul.exercises-list"),r=document.querySelector("ul.pagination-controls-list"),L=document.querySelector("form.search-form"),j=L.querySelector(".search-input"),S=document.querySelector("button.clear-btn"),u=document.getElementById("categories-section"),K=document.documentElement.clientWidth<=ce;let p=$[0],d="",g="",I=1,_=K?9:12,B=K?8:10;L.addEventListener("input",t=>{g=t.target.value,g.length?S.classList.remove("visually-hidden"):S.classList.add("visually-hidden")});L.addEventListener("submit",async t=>{t.preventDefault(),T(u);try{const e=await C(p,d,g,I,B),{results:s,page:a,totalPages:o}=e;r.innerHTML="",k(s,x),f(Number(o),Number(a),r)}catch(e){h.error({icon:"",position:"topRight",message:e.message})}finally{M(u)}});S.addEventListener("click",async()=>{g="",j.value="",S.classList.add("visually-hidden"),k(results,x),f(Number(totalPages),Number(page),r),P()});async function P(){b.innerHTML="",x.innerHTML="",r.innerHTML="",T(u);try{await new Promise(o=>setTimeout(o,2e3));const t=await O(p,I,_),{results:e,page:s,totalPages:a}=t;N(e,b),f(Number(a),Number(s),r)}catch(t){le.classList.remove("visually-hidden"),h.error({icon:"",position:"topRight",message:t.message})}finally{M(u)}}D.addEventListener("click",de);function de(t){const e=t.target.closest(".filters-list-item");e&&(p=e.dataset.option,P(),R($,p,D),L.classList.add("visually-hidden"),g="",d="",j.value="",H.classList.add("visually-hidden"),A.textContent=d)}b.addEventListener("click",ue);async function ue(t){const e=t.target.closest(".categories-item");if(e){T(u),d=e.dataset.name;try{const s=await C(p,d,g,I,B),{results:a,page:o,totalPages:i}=s;b.innerHTML="",r.innerHTML="",k(a,x),f(Number(i),Number(o),r),L.classList.remove("visually-hidden"),H.classList.remove("visually-hidden"),A.textContent=d}catch(s){h.error({icon:"",position:"topRight",message:s.message})}finally{M(u)}}}r.addEventListener("click",pe);async function pe(t){const e=t.target.closest("button[data-page]");if(e){T(u);const s=parseInt(e.dataset.page,10);try{if(d){const a=await C(p,d,g,s,B),{results:o,page:i,totalPages:n}=a;k(o,x),f(Number(n),Number(i),r)}else{console.log(1);const a=await O(p,s,_),{results:o,page:i,totalPages:n}=a;N(o,b),f(Number(n),Number(i),r)}}catch(a){h.error({icon:"",position:"topRight",message:a.message})}finally{M(u)}}}document.addEventListener("DOMContentLoaded",V);R($,p,D);P();const E=document.getElementById("scroll-top");console.log(E);const me=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},ge=()=>{window.scrollY>window.innerHeight?E.classList.add("scroll-show"):E.classList.remove("scroll-show")};window.addEventListener("scroll",ge);E.addEventListener("click",me);
//# sourceMappingURL=index.js.map
