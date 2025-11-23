import{a as u,b as B,i as m}from"./vendor-D2ogNlHo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const $=document.querySelector(".burger"),l=document.querySelector(".mobile-menu"),x=document.querySelector(".mobile-menu__close");$&&l&&x&&($.addEventListener("click",()=>{l.classList.add("open"),document.body.style.overflow="hidden"}),x.addEventListener("click",()=>{l.classList.remove("open"),document.body.style.overflow=""}),l.addEventListener("click",e=>{e.target===l&&(l.classList.remove("open"),document.body.style.overflow="")}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(l.classList.remove("open"),document.body.style.overflow="")}));const L=window.location.pathname,F=document.querySelectorAll(".nav-link");F.forEach(e=>{e.pathname===L&&e.classList.add("nav-link--active")});const C=document.querySelectorAll(".mobile-menu__links a");C.forEach(e=>{e.pathname===L&&e.classList.add("mobile-link--active"),e.addEventListener("click",()=>{l?.classList.remove("open"),document.body.style.overflow=""})});u.defaults.baseURL="https://your-energy.b.goit.study/api/";async function ae(e="Muscles",t="1",s="12"){return(await u.get("/filters",{params:{filter:e,page:t,limit:s}})).data}async function oe(e,t,s,a=1,o=10){return(await u.get("/exercises",{params:{[e==="Body parts"?"bodypart":e.toLowerCase()]:t.toLowerCase().replace(" ","%20"),keyword:s,page:a,limit:o}})).data}async function O(e="64f389465ae26083f39b17a2"){return(await u.get(`/exercises/${e}`)).data}async function A(e,t){return(await u.patch(`/exercises/${e}/rating`,t)).data}const I=async()=>{try{const{data:e}=await u.get("/quote");return console.log("Quote from API:",e),e}catch(e){throw console.error("Error fetching quote:",e),e}},c="/project-17112025/assets/icons-BwHIlvNv.svg";function _({gifUrl:e,name:t,rating:s,target:a,bodyPart:o,equipment:n,popularity:r,burnedCalories:g,description:p}){return`<section class="modal modal-exercise">
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
          <use href="${c}#icon-x-white"></use>
        </svg>
      </button>
      <h3 class="modal-exercise-title">${f(t)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${s}</p>
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${f(a)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${f(o)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${f(n)}</p>
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
      <p class="modal-exercise-description">${p}</p>
    </div>
  </div>
  <ul class="modal-exercise-btn-list">
    <li>
      <button type="button" class="modal-exercise-btn add-to-favorites-btn js-add-to-favorites-btn">
        Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="${c}#icon-heart"></use></svg>
        </span>
      </button>
    </li>
    <li>
      <button type="button" class="modal-exercise-btn give-rating-btn js-give-rating-btn">
        Give a rating
      </button>
    </li>
  </ul>
</section>
  `}function k(){return`
  Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="${c}#icon-heart"></use></svg>
        </span>`}function M(){return`
  Remove from favorites
        <span>
          <svg class="modal-exercise-trash-icon js-modal-exercise-trash-icon">
            <use href="${c}#icon-trash"></use></svg>
        </span>
  `}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}class P{#e="Escape";options={onShow:t=>{t.element().querySelector(this.closeSelector).onclick=t.close,document.addEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="auto"}};constructor(t,s,a){this.markup=t,this.closeSelector=s,this.responceData=a,this.handleCloseModalKeyDownBound=this.handleCloseModalKeyDown.bind(this),this.build()}build(){this.instance=B.create(this.markup(this.responceData),this.options)}open(){this.instance.show()}handleCloseModalKeyDown(t){t.code===this.#e&&this.instance.close()}get closeKey(){return this.#e}set closeKey(t){this.#e=t}}const N="[data-modal-rating]",j="[data-rating-form]",i={ratingModalBackdrop:document.querySelector(N),closeRatingModalBtn:document.querySelector("[data-modal-rating-close]"),ratingForm:document.querySelector(j),ratingStars:document.querySelector(".rating-stars"),ratingValueSpan:document.querySelector(".rating-value"),ratingRadios:document.querySelectorAll(".rating-radio")};let w=null,d=null,v=0;function S(e,t){i.ratingModalBackdrop&&(w=e,d=t,d&&t.instance&&t.instance.close(),i.ratingModalBackdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",K())}function b(){i.ratingModalBackdrop&&(i.ratingModalBackdrop.classList.add("is-hidden"),document.body.style.overflow="",d&&d.instance&&d.instance.show(),w=null,d=null,v=0,i.ratingForm.reset())}function E(e){i.ratingValueSpan.textContent=e.toFixed(1),v=e}function D(e){if(e.target.name==="rating"){const t=parseFloat(e.target.value);E(t)}}function K(){i.ratingRadios.length>0&&i.ratingRadios.forEach(e=>e.checked=!1),E(0)}async function H(e){e.preventDefault();const t=new FormData(e.currentTarget),s=t.get("email").trim(),a=t.get("review").trim();if(v===0){m.error({message:"Please give a rating before submitting.",position:"topRight"});return}if(!s){m.error({message:"Email field cannot be empty.",position:"topRight"});return}if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(s)){m.error({message:"Please enter a valid email address.",position:"topRight"});return}const o={rate:v,email:s,review:a||""};try{await A(w,o),m.success({message:"Rating successfully sent! Thank you for your feedback.",position:"topRight"}),b()}catch(n){console.error("Rating submission failed:",n);let r="Failed to submit rating. Please try again.";n.response&&n.response.status===409&&(r="You have already rated this exercise."),m.error({message:r,position:"topRight"})}}i.ratingStars&&i.ratingStars.addEventListener("change",D);i.ratingForm&&i.ratingForm.addEventListener("submit",H);i.closeRatingModalBtn&&i.closeRatingModalBtn.addEventListener("click",b);i.ratingModalBackdrop&&i.ratingModalBackdrop.addEventListener("click",e=>{e.target===i.ratingModalBackdrop&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&i.ratingModalBackdrop&&!i.ratingModalBackdrop.classList.contains("is-hidden")&&b()});const U='[data-modal-exercise="open"]',G='[data-modal-exercise="close"]',h="favorite_workouts";function q(){const e=localStorage.getItem(h);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch(t){return console.error("Failed to parse favorites from LS in modal:",t),localStorage.removeItem(h),[]}}function R(e){localStorage.setItem(h,JSON.stringify(e))}function Q(e){return q().some(s=>s._id===e)}document.addEventListener("click",e=>{if(e.target.matches(U)){const t=e.target.dataset.exerciseId;J(t)}});async function J(e){let t={};const s=e||"64f389465ae26083f39b17a2";try{const a=await O(s);t=new P(_,G,a),t.open(),V(t,a)}catch(a){console.error("Error loading exercise data:",a)}}function V(e,t){const s=e.instance.element(),a=s.querySelector(".js-give-rating-btn"),o=s.querySelector(".js-add-to-favorites-btn");a&&a.addEventListener("click",()=>z(t._id,e)),o&&(o.addEventListener("click",n=>W(n,t,o)),Q(t._id)?o.innerHTML=M():o.innerHTML=k())}function z(e,t){S(e,t)}function W(e,t,s){const a=q();if(a.some(n=>n._id===t._id)){Z(t._id,s,a);return}Y(t,s,a)}function Y(e,t,s){t.innerHTML=M();const a={_id:e._id,time:e.time,target:e.target,name:e.name,burnedCalories:e.burnedCalories,bodyPart:e.bodyPart};s.push(a),R(s)}function Z(e,t,s){const a=s.filter(o=>o._id!==e);a.length===0?localStorage.removeItem(h):R(a),t.innerHTML=k()}const X=()=>new Date().toISOString().split("T")[0],ee=async()=>{const e=JSON.parse(localStorage.getItem("quoteOfTheDay")),t=X();if(e&&e.date===t)return console.log("Already have today's quote:",e),e;const a={...await I(),date:t};return localStorage.setItem("quoteOfTheDay",JSON.stringify(a)),a};function se(e,t){const s=e.map(({filter:a,imgURL:o,name:n})=>`
          <li class="categories-item" data-name="${n}">
            <img
            class="category-image"
            src="${o}"
            alt="${n}"
          />
          <div class="categories-item-info">
            <h3>${n}</h3>
            <p>${a}</p>
            </div>
          </li>
      `).join("");t.innerHTML=s}function ne(e,t){if(e.length>0){const a=e.map(({_id:o,name:n,target:r,bodyPart:g,burnedCalories:p,rating:y})=>`
    <li class="exercises-item">
    <div class="header-card">
    <div class="header-left">
        <span class="type">WORKOUT</span>
        <span class="rating">${Number(y).toFixed(1)}</span>
        <svg class="icon-star" width="18" height="18">
            <use href="${c}#icon-star"></use>
        </svg>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${o}"> Start
        <svg class="icon-arrow-right" width="18" height="18">
        <use href="${c}#icon-arrow-1"></use>
        </svg>
        </button>
        </div>
        </div>
    <div class="title">
      <button type="button" class="exercise-rating-btn js-give-rating-btn" data-exercise-id="${o}">
      <svg class="icon" width="24" height="24">
      <use href="${c}#icon-run-man-2"></use>
      </svg>
      </button>
      <span class="name-text-exercise">${n}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
        <li class="calories">
        <span class="calories-name">Burned calories</span>
        <span class="calories-value">${p} / 3 min</span>
        </li>
        <li class="body-part">
        <span class="body-part-name">Body part:</span>
        <span class="body-part-value">${g}</span>
        </li>
        <li class="target">
        <span class="target-name">Target:</span>
        <span class="target-value">${r}</span>
          </li>
          </ul>
          </div>
          </li>
          `).join("");t.innerHTML=a}else t.innerHTML="<div class='no-content-warning'><p>It appears that we haven't added any exercises to to this section yet.</p></div>";t.querySelectorAll(".js-give-rating-btn").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.exerciseId;S(o,null)})})}function ie(e,t,s){const a=Number(t),o=Number(e),n=a===1,r=a===o,g=`
      <li class="pagination-control-item">
          <button class=" ${n?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="beg"
                  ${n?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${c}#icon-vector"></use>
                  </svg>
                  <svg class="left-vector" width="6" height="24">
                    <use href="${c}#icon-vector"></use>
                  </svg>
          </button>
      </li>
      <li class="pagination-control-item">
          <button class=" ${n?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="prev"
                  ${n?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${c}#icon-vector"></use>
                  </svg>
           </button>
      </li>
  `,p=`
  ${n?`
    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="1">1</button>
    </li>
    ${o>1?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="2">2</button>
      </li>
      `:""}
    ${o>2?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="3">3</button>
      </li>
      `:""}
    ${o>3?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
  `:""}

  ${!n&&r?`
    ${o>3?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
    ${o>2?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="${a-2}">${a-2}</button>
      </li>
    `:""}
    ${o>1?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="${a-1}">${a-1}</button>
      </li>
    `:""}
    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="${a}">${a}</button>
    </li>
  `:""}

  ${!n&&!r?`
    ${a>2?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}

    <li class="pagination-control-item">
        <button class="pagination-control" data-page="${a-1}">${a-1}</button>
    </li>

    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="${a}">${a}</button>
    </li>

    <li class="pagination-control-item">
        <button class="pagination-control" data-page="${a+1}">${a+1}</button>
    </li>

    ${o-a>=2?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
  `:""}
  `,y=`
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${r?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="next"
                  ${r?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${c}#icon-vector"></use>
                  </svg>
           </button>
      </li>
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${r?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="end"
                  ${r?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${c}#icon-vector"></use>
                  </svg>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${c}#icon-vector"></use>
                  </svg>
          </button>
      </li>
  `,T=g+p+y;s.innerHTML=T}function re(e,t,s){const a=e.map(o=>`
          <li class="filters-list-item ${t===o?"filters-list-item-active":""}" data-option="${o}"><p>${o}</p></li>
      `).join("");s.innerHTML=a}async function ce(){try{const e=await ee(),t=document.querySelector(".quote-api-text"),s=document.querySelector(".quote-api-author");t&&(t.textContent=e.quote||"No quote available"),s&&(s.textContent=e.author||"Unknown author")}catch(e){console.error("Error rendering quote:",e)}}export{ie as a,ae as b,se as c,re as d,ce as e,oe as f,c as i,ne as r};
//# sourceMappingURL=render-functions-kYTPkE1q.js.map
