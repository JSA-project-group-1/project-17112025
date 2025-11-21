import"./assets/header-JYuTczHw.js";import{a as g,i as h,b as K}from"./assets/vendor-D2ogNlHo.js";g.defaults.baseURL="https://your-energy.b.goit.study/api/";async function I(t="Muscles",e="1",s="12"){return(await g.get("/filters",{params:{filter:t,page:e,limit:s}})).data}async function M(t,e,s,a=1,o=10){return(await g.get("/exercises",{params:{[t==="Body parts"?"bodypart":t.toLowerCase()]:e.toLowerCase().replace(" ","%20"),keyword:s,page:a,limit:o}})).data}async function _(t="64f389465ae26083f39b17a2"){return(await g.get(`/exercises/${t}`)).data}function B(t,e){const s=t.map(({filter:a,imgURL:o,name:i})=>`
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
      `).join("");e.innerHTML=s}function E(t,e){const s=t.map(({_id:a,name:o,target:i,bodyPart:n,burnedCalories:p,rating:c})=>`
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
            <span class="calories-value">${p} / 3 min</span>
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
      `).join("");e.innerHTML=s}function v(t,e,s){const o=Array.from({length:t},(i,n)=>n+1).map(i=>`
          <li class="pagination-control-item">
            <button class="${e===i?"pagination-control-active":"pagination-control"}" data-page="${i}">${i}</button>
          </li>
      `).join("");s.innerHTML=o}function O(t,e,s){const a=t.map(o=>`
          <li class="filters-list-item ${e===o?"filters-list-item-active":""}" data-option="${o}"><p>${o}</p></li>
      `).join("");s.innerHTML=a}g.defaults.baseURL="https://your-energy.b.goit.study/api/";const Q=async()=>{try{const{data:t}=await g.get("/quote");return console.log("Quote from API:",t),t}catch(t){throw console.error("Error fetching quote:",t),t}},U=()=>new Date().toISOString().split("T")[0],J=async()=>{const t=JSON.parse(localStorage.getItem("quoteOfTheDay")),e=U();if(t&&t.date===e)return console.log("Already have today's quote:",t),t;const a={...await Q(),date:e};return localStorage.setItem("quoteOfTheDay",JSON.stringify(a)),a};async function z(){try{const t=await J(),e=document.querySelector(".quote-api-text"),s=document.querySelector(".quote-api-author");e&&(e.textContent=t.quote||"No quote available"),s&&(s.textContent=t.author||"Unknown author")}catch(t){console.error("Error rendering quote:",t)}}const f=document.getElementById("footerSubscribeForm");if(f){let a=function(n){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)},o=function(n){h.success({title:"Success",message:n,position:"topRight",timeout:5e3})},i=function(n){h.error({title:"Error",message:n,position:"topRight",timeout:5e3})};const t=f.querySelector('input[name="email"]'),e=f.querySelector('button[type="submit"]');f.addEventListener("submit",s);async function s(n){n.preventDefault();const p=t.value.trim();if(!a(p)){i("Invalid email address");return}try{e.disabled=!0;const c=await g.post("https://your-energy.b.goit.study/api/subscription",{email:p},{headers:{"Content-Type":"application/json"}});c.status===201&&(o(c.data.message),f.reset())}catch(c){c.response?i(c.response.data.message||"Subscription failed"):i("Network error. Please try again.")}finally{e.disabled=!1}}}function G({gifUrl:t,name:e,rating:s,target:a,bodyPart:o,equipment:i,popularity:n,burnedCalories:p,description:c}){return`<section class="modal modal-exercise">
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
            <p class="modal-exercise-tag-value">${p}</p>
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
  `}function V(){return`
  Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>`}function P(){return`
  Remove from favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon modal-favorite-active-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>
  `}function w(t){return t.charAt(0).toUpperCase()+t.slice(1)}class W{#e="Escape";options={onShow:e=>{e.element().querySelector(this.closeSelector).onclick=e.close,document.addEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="auto"}};constructor(e,s,a){this.markup=e,this.closeSelector=s,this.responceData=a,this.handleCloseModalKeyDownBound=this.handleCloseModalKeyDown.bind(this),this.build()}build(){this.instance=K.create(this.markup(this.responceData),this.options)}open(){this.instance.show()}handleCloseModalKeyDown(e){e.code===this.#e&&this.instance.close()}get closeKey(){return this.#e}set closeKey(e){this.#e=e}}const Z='[data-modal-exercise="open"]',Y='[data-modal-exercise="close"]',q="favorite-id-list",l=JSON.parse(localStorage.getItem(q))||[];document.addEventListener("click",t=>{if(t.target.matches(Z)){const e=t.target.dataset.exerciseId;X(e)}});async function X(t){let e={};const s=t||"64f389465ae26083f39b17a2";try{const a=await _(s);e=new W(G,Y,a),e.open(),ee(e,s)}catch(a){console.error("Error loading exercise data:",a)}}function ee(t,e){const s=t.instance.element(),a=s.querySelector(".js-give-rating-btn"),o=s.querySelector(".js-add-to-favorites-btn");a&&a.addEventListener("click",i=>te(i,t)),o&&(o.addEventListener("click",i=>se(i,e,o)),l.includes(e)&&(o.innerHTML=P()))}function te(t,e){e.instance.close()}function se(t,e,s){if(l.includes(e)){oe(e,s),ie();return}ae(e,s)}function ae(t,e){e.innerHTML=P(),l.push(t);const s=JSON.stringify(l);localStorage.setItem(q,s)}function oe(t,e){const s=l.indexOf(t);l.splice(s,1);const a=JSON.stringify(l);localStorage.setItem(q,a),e.innerHTML=V()}function ie(){l.length===0&&localStorage.removeItem(q)}const T=["Muscles","Body parts","Equipment"],ne=375,N=document.querySelector("span.slash"),R=document.querySelector("p.current-category"),re=document.querySelector("p.warning"),C=document.querySelector("ul.filters-list"),b=document.querySelector("ul.block-categories-list"),x=document.querySelector("ul.exercises-list"),r=document.querySelector("ul.pagination-controls-list"),y=document.querySelector("span.loader"),L=document.querySelector("form.search-form"),F=L.querySelector(".search-input"),S=document.querySelector("button.clear-btn"),A=document.documentElement.clientWidth<=ne;let u=T[0],d="",m="",$=1,H=A?9:12,D=A?8:10;L.addEventListener("input",t=>{m=t.target.value,m.length?S.classList.remove("visually-hidden"):S.classList.add("visually-hidden")});L.addEventListener("submit",async t=>{t.preventDefault();try{const e=await M(u,d,m,$,D),{results:s,page:a,totalPages:o}=e;r.innerHTML="",E(s,x),v(Number(o),Number(a),r)}catch(e){y.classList.add("visually-hidden"),h.error({icon:"",position:"topRight",message:e.message})}});S.addEventListener("click",async()=>{m="",F.value="",S.classList.add("visually-hidden"),E(results,x),v(Number(totalPages),Number(page),r)});async function j(){b.innerHTML="",x.innerHTML="",r.innerHTML="",y.classList.remove("visually-hidden");try{const t=await I(u,$,H),{results:e,page:s,totalPages:a}=t;B(e,b),v(Number(a),Number(s),r),y.classList.add("visually-hidden")}catch(t){y.classList.add("visually-hidden"),re.classList.remove("visually-hidden"),h.error({icon:"",position:"topRight",message:t.message})}}C.addEventListener("click",ce);function ce(t){const e=t.target.closest(".filters-list-item");e&&(u=e.dataset.option,j(),O(T,u,C),L.classList.add("visually-hidden"),m="",d="",F.value="",N.classList.add("visually-hidden"),R.textContent=d)}b.addEventListener("click",le);async function le(t){const e=t.target.closest(".categories-item");if(e){d=e.dataset.name;try{const s=await M(u,d,m,$,D),{results:a,page:o,totalPages:i}=s;b.innerHTML="",r.innerHTML="",E(a,x),v(Number(i),Number(o),r),L.classList.remove("visually-hidden"),N.classList.remove("visually-hidden"),R.textContent=d}catch(s){y.classList.add("visually-hidden"),h.error({icon:"",position:"topRight",message:s.message})}}}r.addEventListener("click",de);async function de(t){const e=t.target.closest("button[data-page]");if(e){const s=parseInt(e.dataset.page,10);try{if(d){const a=await M(u,d,m,s,D),{results:o,page:i,totalPages:n}=a;E(o,x),v(Number(n),Number(i),r)}else{console.log(1);const a=await I(u,s,H),{results:o,page:i,totalPages:n}=a;B(o,b),v(Number(n),Number(i),r)}}catch(a){y.classList.add("visually-hidden"),h.error({icon:"",position:"topRight",message:a.message})}}}document.addEventListener("DOMContentLoaded",z);O(T,u,C);j();const k=document.getElementById("scroll-top");console.log(k);const ue=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},pe=()=>{window.scrollY>window.innerHeight?k.classList.add("scroll-show"):k.classList.remove("scroll-show")};window.addEventListener("scroll",pe);k.addEventListener("click",ue);
//# sourceMappingURL=index.js.map
