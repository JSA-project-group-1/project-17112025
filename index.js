import"./assets/header-DJd-5JJA.js";import{a as b,i as g,b as j}from"./assets/vendor-D2ogNlHo.js";b.defaults.baseURL="https://your-energy.b.goit.study/api/";async function I(s="Muscles",e="1",t="12"){return(await b.get("/filters",{params:{filter:s,page:e,limit:t}})).data}async function E(s,e,t,a=1,i=10){return(await b.get("/exercises",{params:{[s==="Body parts"?"bodypart":s.toLowerCase()]:e.toLowerCase().replace(" ","%20"),keyword:t,page:a,limit:i}})).data}async function A(s="64f389465ae26083f39b17a2"){return(await b.get(`/exercises/${s}`)).data}function R(s,e){const t=s.map(({filter:a,imgURL:i,name:o})=>`
          <li class="categories-item" data-name="${o}">
            <img
            class="category-image"
            src="${i}"
            alt="${o}"
          />
          <div class="categories-item-info">
            <h3>${o}</h3>
            <p>${a}</p>
            </div>
          </li>
      `).join("");e.innerHTML=t}function w(s,e){const t=s.map(({_id:a,name:i,target:o,bodyPart:n,burnedCalories:u,rating:c})=>`
    <li class="exercises-item">
    <div class="header">
        <div class = "workout-rating">
        <span class="type">WORKOUT</span>
        <span class="rating">${c} </span>
        </div>
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${a}"> Start </button>
    </div>
    <div class="title">
        <span class="icon">icon</span> ${i}
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
          <span class="target-value">${o}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");e.innerHTML=t}function v(s,e,t){const i=Array.from({length:s},(o,n)=>n+1).map(o=>`
          <li class="pagination-control-item">
            <button class="${e===o?"pagination-control-active":"pagination-control"}" data-page="${o}">${o}</button>
          </li>
      `).join("");t.innerHTML=i}function P(s,e,t){const a=s.map(i=>`
          <li class="filters-list-item ${e===i?"filters-list-item-active":""}" data-option="${i}"><p>${i}</p></li>
      `).join("");t.innerHTML=a}const h=document.getElementById("footerSubscribeForm");if(h){let a=function(n){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)},i=function(n){g.success({title:"Success",message:n,position:"topRight",timeout:5e3})},o=function(n){g.error({title:"Error",message:n,position:"topRight",timeout:5e3})};const s=h.querySelector('input[name="email"]'),e=h.querySelector('button[type="submit"]');h.addEventListener("submit",t);async function t(n){n.preventDefault();const u=s.value.trim();if(!a(u)){o("Invalid email address");return}try{e.disabled=!0;const c=await b.post("https://your-energy.b.goit.study/api/subscription",{email:u},{headers:{"Content-Type":"application/json"}});c.status===201&&(i(c.data.message),h.reset())}catch(c){c.response?o(c.response.data.message||"Subscription failed"):o("Network error. Please try again.")}finally{e.disabled=!1}}}function O({gifUrl:s,name:e,rating:t,target:a,bodyPart:i,equipment:o,popularity:n,burnedCalories:u,description:c}){return`<section class="modal modal-exercise">
  <div class="modal-exercise-container">
    <img
      src="${s}"
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
      <h3 class="modal-exercise-title">${k(e)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${t}</p>
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${k(a)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${k(i)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${k(o)}</p>
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
  `}function K(){return`
  Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>`}function N(){return`
  Remove from favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon modal-favorite-active-icon">
            <use href="./img/sport-sprite.svg#icon-heart"></use></svg
        ></span>
  `}function k(s){return s.charAt(0).toUpperCase()+s.slice(1)}class _{#e="Escape";options={onShow:e=>{e.element().querySelector(this.closeSelector).onclick=e.close,document.addEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="auto"}};constructor(e,t,a){this.markup=e,this.closeSelector=t,this.responceData=a,this.handleCloseModalKeyDownBound=this.handleCloseModalKeyDown.bind(this),this.build()}build(){this.instance=j.create(this.markup(this.responceData),this.options)}open(){this.instance.show()}handleCloseModalKeyDown(e){e.code===this.#e&&this.instance.close()}get closeKey(){return this.#e}set closeKey(e){this.#e=e}}const U='[data-modal-exercise="open"]',z='[data-modal-exercise="close"]',M="favorite-id-list",l=JSON.parse(localStorage.getItem(M))||[];document.addEventListener("click",s=>{if(s.target.matches(U)){const e=s.target.dataset.exerciseId;J(e)}});async function J(s){let e={};const t=s||"64f389465ae26083f39b17a2";try{const a=await A(t);e=new _(O,z,a),e.open(),V(e,t)}catch(a){console.error("Error loading exercise data:",a)}}function V(s,e){const t=s.instance.element(),a=t.querySelector(".js-give-rating-btn"),i=t.querySelector(".js-add-to-favorites-btn");a&&a.addEventListener("click",o=>G(o,s)),i&&(i.addEventListener("click",o=>W(o,e,i)),l.includes(e)&&(i.innerHTML=N()))}function G(s,e){e.instance.close()}function W(s,e,t){if(l.includes(e)){Q(e,t),X();return}Z(e,t)}function Z(s,e){e.innerHTML=N(),l.push(s);const t=JSON.stringify(l);localStorage.setItem(M,t)}function Q(s,e){const t=l.indexOf(s);l.splice(t,1);const a=JSON.stringify(l);localStorage.setItem(M,a),e.innerHTML=K()}function X(){l.length===0&&localStorage.removeItem(M)}const $=["Muscles","Body parts","Equipment"],Y=375,C=document.querySelector("ul.filters-list"),f=document.querySelector("ul.block-categories-list"),x=document.querySelector("ul.exercises-list"),r=document.querySelector("ul.pagination-controls-list"),m=document.querySelector("span.loader"),L=document.querySelector("form.search-form"),q=L.querySelector(".search-input"),S=document.querySelector("button.clear-btn"),D=document.documentElement.clientWidth<=Y;let d=$[0],y="",p="",T=1,F=D?9:12,B=D?8:10;L.addEventListener("input",s=>{p=s.target.value,p.length?S.classList.remove("visually-hidden"):S.classList.add("visually-hidden")});L.addEventListener("submit",async s=>{s.preventDefault();try{const e=await E(d,y,p,T,B),{results:t,page:a,totalPages:i}=e;r.innerHTML="",w(t,x),v(Number(i),Number(a),r)}catch(e){m.classList.add("visually-hidden"),g.error({icon:"",position:"topRight",message:e.message})}});S.addEventListener("click",async()=>{p="",q.value="",S.classList.add("visually-hidden"),w(results,x),v(Number(totalPages),Number(page),r)});async function H(){f.innerHTML="",x.innerHTML="",r.innerHTML="",m.classList.remove("visually-hidden");try{const s=await I(d,T,F),{results:e,page:t,totalPages:a}=s;R(e,f),v(Number(a),Number(t),r),m.classList.add("visually-hidden")}catch(s){m.classList.add("visually-hidden"),g.error({icon:"",position:"topRight",message:s.message})}}C.addEventListener("click",ee);function ee(s){const e=s.target.closest(".filters-list-item");e&&(d=e.dataset.option,H(),P($,d,C),L.classList.add("visually-hidden"),p="",q.value="")}f.addEventListener("click",se);async function se(s){const e=s.target.closest(".categories-item");if(e){y=e.dataset.name;try{const t=await E(d,y,p,T,B),{results:a,page:i,totalPages:o}=t;f.innerHTML="",r.innerHTML="",w(a,x),v(Number(o),Number(i),r),L.classList.remove("visually-hidden")}catch(t){m.classList.add("visually-hidden"),g.error({icon:"",position:"topRight",message:t.message})}}}r.addEventListener("click",te);async function te(s){const e=s.target.closest("button[data-page]");if(e){const t=parseInt(e.dataset.page,10);try{if(y){const a=await E(d,y,p,t,B),{results:i,page:o,totalPages:n}=a;w(i,x),v(Number(n),Number(o),r)}else{console.log(1);const a=await I(d,t,F),{results:i,page:o,totalPages:n}=a;R(i,f),v(Number(n),Number(o),r)}}catch(a){m.classList.add("visually-hidden"),g.error({icon:"",position:"topRight",message:a.message})}}}P($,d,C);H();
//# sourceMappingURL=index.js.map
