import"./assets/styles-D3C74sH2.js";import{a as p,b as k,i as S}from"./assets/vendor-D2ogNlHo.js";p.defaults.baseURL="https://your-energy.b.goit.study/api/";async function M(t="Muscles",e="1",s="12"){return(await p.get("/filters",{params:{filter:t,page:e,limit:s}})).data}async function $(t,e,s,o,i=1,a=10){return(await p.get("/exercises",{params:{bodypart:t,muscles:e,equipment:s,keyword:o,page:i,limit:a}})).data}function T(t,e){const s=t.map(({filter:o,imgURL:i,name:a})=>`
          <li class="categories-item" data-name="${a}">
            <img
            class="category-image"
            src="${i}"
            alt="${a}"
          />
          <div class="categories-item-info">
            <h3>${a}</h3>
            <p>${o}</p>
            </div>
          </li>
      `).join("");e.innerHTML=s}function I(t,e){const s=t.map(({_id:o,name:i,target:a,bodyPart:r,burnedCalories:g,rating:f})=>`
          <li class="exercises-item">
            <p>_id: ${o}</p>
            <p>name: ${i}</p>
            <p>target: ${a}</p>
            <p>bodyPart: ${r}</p>
            <p>burnedCalories: ${g}</p>
            <p>rating: ${f}</p>
          </li>
      `).join("");e.innerHTML=s}function b(t,e,s){const i=Array.from({length:t},(a,r)=>r+1).map(a=>`
          <li class="pagination-control-item">
            <button class="${e===a?"pagination-control-active":"pagination-control"}">${a}</button>
          </li>
      `).join("");s.innerHTML=i}function L(t,e,s){const o=t.map(i=>`
          <li class="filters-list-item ${e===i?"filters-list-item-active":""}" data-option="${i}"><p>${i}</p></li>
      `).join("");s.innerHTML=o}const C=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISE_ENDPOINT:"/exercises",RATING_ENDPOINT:"/rating",FILTERS_ENDPOINT:"/filters",QUOTE_ENDPOINT:"/quote",SUBSCR_EDPOINT:"/subscription"}),{BASE_URL:N,EXERCISE_ENDPOINT:w}=C;async function D(t="64f389465ae26083f39b17a2"){return(await p.get(`${N}${w}/${t}`)).data}function R({gifUrl:t,name:e,rating:s,target:o,bodyPart:i,equipment:a,popularity:r,burnedCalories:g,description:f}){return`<section class="modal modal-exercise">
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
      <h3 class="modal-exercise-title">${c(e)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${s}</p>
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${c(o)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${c(i)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${c(a)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Popular</p>
            <p class="modal-exercise-tag-value">${r}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Burned Calories</p>
            <p class="modal-exercise-tag-value">${g}</p>
          </li>
        </ul>
      </div>
      <p class="modal-exercise-description">${f}</p>
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
  `}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}class B{#e="Escape";options={onShow:e=>{e.element().querySelector(this.closeSelector).onclick=e.close,document.addEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="auto"}};constructor(e,s,o){this.markup=e,this.closeSelector=s,this.responceData=o,this.handleCloseModalKeyDownBound=this.handleCloseModalKeyDown.bind(this),this.build()}build(){this.instance=k.create(this.markup(this.responceData),this.options)}open(){this.instance.show()}handleCloseModalKeyDown(e){e.code===this.#e&&this.instance.close()}get closeKey(){return this.#e}set closeKey(e){this.#e=e}}const O='[data-modal-exercise="open"]',P='[data-modal-exercise="close"]',_=document.querySelector(O),m="favorite-id-list",n=JSON.parse(localStorage.getItem(m))||[];_.addEventListener("click",F);async function F(){let t={};try{const e=await D();t=new B(R,P,e),t.open()}catch{Notify.failure("Sorry, there are no data matching your category. Please try again.")}}const q=document.querySelector(".js-give-rating-btn"),v=document.querySelector(".js-add-to-favorites-btn");q.addEventListener("click",t=>A(t,modalBox));v.addEventListener("click",t=>H(t,favoriteId,v));n.includes(favoriteId)&&(v.innerHTML=createRemoveFromFavoritesMarkup());function A(t,e){e.instance.close()}function H(t,e,s){if(n.includes(e)){K(e,s),U();return}j(e,s)}function j(t,e){e.innerHTML=createRemoveFromFavoritesMarkup(),n.push(t);const s=JSON.stringify(n);localStorage.setItem(m,s)}function K(t,e){const s=n.indexOf(t);n.splice(s,1);const o=JSON.stringify(n);localStorage.setItem(m,o),e.innerHTML=createAddToFavoritesMarkup()}function U(){n.length===0&&localStorage.removeItem(m)}const h=["Muscles","Body parts","Equipment"],G=375,x=document.querySelector("ul.filters-list"),l=document.querySelector("ul.block-categories-list"),J=document.querySelector("ul.exercises-list"),d=document.querySelector("ul.pagination-controls-list"),y=document.querySelector("span.loader"),z=document.documentElement.clientWidth<=G;let u=h[0];async function E(){l.innerHTML="",d.innerHTML="",y.classList.remove("visually-hidden");try{const t=await M(u,"1",`${z?9:12}`),{results:e,page:s,totalPages:o}=t;T(e,l),b(Number(o),Number(s),d),y.classList.add("visually-hidden")}catch(t){y.classList.add("visually-hidden"),S.error({icon:"",position:"topRight",message:t.message})}}x.addEventListener("click",X);function X(t){const e=t.target.closest(".filters-list-item");e&&(u=e.dataset.option,L(h,u,x),E())}l.addEventListener("click",Q);async function Q(t){const e=t.target.closest(".categories-item");if(e){e.dataset.name;const s=await $("back","lats","barbell","pull");console.log(s);const{results:o,page:i,totalPages:a}=s;l.innerHTML="",d.innerHTML="",I(o,J),b(Number(a),Number(i),d)}}L(h,u,x);E();
//# sourceMappingURL=index.js.map
