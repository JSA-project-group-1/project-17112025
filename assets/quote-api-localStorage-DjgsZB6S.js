import{a as l,b as q,i as u}from"./vendor-D2ogNlHo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const y=document.querySelector(".burger"),c=document.querySelector(".mobile-menu"),v=document.querySelector(".mobile-menu__close");y&&c&&v&&(y.addEventListener("click",()=>{c.classList.add("open"),document.body.style.overflow="hidden"}),v.addEventListener("click",()=>{c.classList.remove("open"),document.body.style.overflow=""}),c.addEventListener("click",e=>{e.target===c&&(c.classList.remove("open"),document.body.style.overflow="")}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(c.classList.remove("open"),document.body.style.overflow="")}));const b=window.location.pathname,R=document.querySelectorAll(".nav-link");R.forEach(e=>{e.pathname===b&&e.classList.add("nav-link--active")});const F=document.querySelectorAll(".mobile-menu__links a");F.forEach(e=>{e.pathname===b&&e.classList.add("mobile-link--active"),e.addEventListener("click",()=>{c?.classList.remove("open"),document.body.style.overflow=""})});l.defaults.baseURL="https://your-energy.b.goit.study/api/";async function X(e="Muscles",t="1",o="12"){return(await l.get("/filters",{params:{filter:e,page:t,limit:o}})).data}async function ee(e,t,o,s=1,a=10){return(await l.get("/exercises",{params:{[e==="Body parts"?"bodypart":e.toLowerCase()]:t.toLowerCase().replace(" ","%20"),keyword:o,page:s,limit:a}})).data}async function T(e="64f389465ae26083f39b17a2"){return(await l.get(`/exercises/${e}`)).data}async function B(e,t){return(await l.patch(`/exercises/${e}/rating`,t)).data}function C({gifUrl:e,name:t,rating:o,target:s,bodyPart:a,equipment:r,popularity:i,burnedCalories:k,description:M}){return`<section class="modal modal-exercise">
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
          <use href="./assets/icons/icons.svg#icon-x-white"></use>
        </svg>
      </button>
      <h3 class="modal-exercise-title">${m(t)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${o}</p>
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${m(s)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${m(a)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${m(r)}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Popular</p>
            <p class="modal-exercise-tag-value">${i}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Burned Calories</p>
            <p class="modal-exercise-tag-value">${k}</p>
          </li>
        </ul>
      </div>
      <p class="modal-exercise-description">${M}</p>
    </div>
  </div>
  <ul class="modal-exercise-btn-list">
    <li>
      <button type="button" class="modal-exercise-btn add-to-favorites-btn js-add-to-favorites-btn">
        Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="./assets/icons/icons.svg#icon-heart"></use></svg
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
  `}function x(){return`
  Add to favorites
        <span>
          <svg class="modal-exercise-heart-icon js-modal-exercise-heart-icon">
            <use href="./assets/icons/icons.svg#icon-heart"></use></svg
        ></span>`}function w(){return`
  Remove from favorites
        <span>
          <svg class="modal-exercise-trash-icon js-modal-exercise-trash-icon">
            <use href="./assets/icons/icons.svg#icon-trash"></use></svg
        ></span>
  `}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}class O{#e="Escape";options={onShow:t=>{t.element().querySelector(this.closeSelector).onclick=t.close,document.addEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",this.handleCloseModalKeyDownBound),document.body.style.overflow="auto"}};constructor(t,o,s){this.markup=t,this.closeSelector=o,this.responceData=s,this.handleCloseModalKeyDownBound=this.handleCloseModalKeyDown.bind(this),this.build()}build(){this.instance=q.create(this.markup(this.responceData),this.options)}open(){this.instance.show()}handleCloseModalKeyDown(t){t.code===this.#e&&this.instance.close()}get closeKey(){return this.#e}set closeKey(t){this.#e=t}}const _="[data-modal-rating]",A="[data-rating-form]",n={ratingModalBackdrop:document.querySelector(_),closeRatingModalBtn:document.querySelector("[data-modal-rating-close]"),ratingForm:document.querySelector(A),ratingStars:document.querySelector(".rating-stars"),ratingValueSpan:document.querySelector(".rating-value"),ratingRadios:document.querySelectorAll(".rating-radio")};let h=null,d=null,g=0;function I(e,t){n.ratingModalBackdrop&&(h=e,d=t,d&&t.instance&&t.instance.close(),n.ratingModalBackdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",P())}function p(){n.ratingModalBackdrop&&(n.ratingModalBackdrop.classList.add("is-hidden"),document.body.style.overflow="",d&&d.instance&&d.instance.show(),h=null,d=null,g=0,n.ratingForm.reset())}function L(e){n.ratingValueSpan.textContent=e.toFixed(1),g=e}function D(e){if(e.target.name==="rating"){const t=parseFloat(e.target.value);L(t)}}function P(){n.ratingRadios.length>0&&n.ratingRadios.forEach(e=>e.checked=!1),L(0)}async function $(e){e.preventDefault();const t=new FormData(e.currentTarget),o=t.get("email").trim(),s=t.get("review").trim();if(g===0){u.error({message:"Please give a rating before submitting.",position:"topRight"});return}if(!o){u.error({message:"Email field cannot be empty.",position:"topRight"});return}if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(o)){u.error({message:"Please enter a valid email address.",position:"topRight"});return}const a={rate:g,email:o,review:s||""};try{await B(h,a),u.success({message:"Rating successfully sent! Thank you for your feedback.",position:"topRight"}),p()}catch(r){console.error("Rating submission failed:",r);let i="Failed to submit rating. Please try again.";r.response&&r.response.status===409&&(i="You have already rated this exercise."),u.error({message:i,position:"topRight"})}}n.ratingStars&&n.ratingStars.addEventListener("change",D);n.ratingForm&&n.ratingForm.addEventListener("submit",$);n.closeRatingModalBtn&&n.closeRatingModalBtn.addEventListener("click",p);n.ratingModalBackdrop&&n.ratingModalBackdrop.addEventListener("click",e=>{e.target===n.ratingModalBackdrop&&p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&n.ratingModalBackdrop&&!n.ratingModalBackdrop.classList.contains("is-hidden")&&p()});const K='[data-modal-exercise="open"]',N='[data-modal-exercise="close"]',f="favorite_workouts";function S(){const e=localStorage.getItem(f);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch(t){return console.error("Failed to parse favorites from LS in modal:",t),localStorage.removeItem(f),[]}}function E(e){localStorage.setItem(f,JSON.stringify(e))}function j(e){return S().some(o=>o._id===e)}document.addEventListener("click",e=>{if(e.target.matches(K)){const t=e.target.dataset.exerciseId;G(t)}});async function G(e){let t={};const o=e||"64f389465ae26083f39b17a2";try{const s=await T(o);t=new O(C,N,s),t.open(),Q(t,s)}catch(s){console.error("Error loading exercise data:",s)}}function Q(e,t){const o=e.instance.element(),s=o.querySelector(".js-give-rating-btn"),a=o.querySelector(".js-add-to-favorites-btn");s&&s.addEventListener("click",()=>U(t._id,e)),a&&(a.addEventListener("click",r=>H(r,t,a)),j(t._id)?a.innerHTML=w():a.innerHTML=x())}function U(e,t){I(e,t)}function H(e,t,o){const s=S();if(s.some(r=>r._id===t._id)){V(t._id,o,s);return}J(t,o,s)}function J(e,t,o){t.innerHTML=w();const s={_id:e._id,time:e.time,target:e.target,name:e.name,burnedCalories:e.burnedCalories,bodyPart:e.bodyPart};o.push(s),E(o)}function V(e,t,o){const s=o.filter(a=>a._id!==e);s.length===0?localStorage.removeItem(f):E(s),t.innerHTML=x()}l.defaults.baseURL="https://your-energy.b.goit.study/api/";const z=async()=>{try{const{data:e}=await l.get("/quote");return console.log("Quote from API:",e),e}catch(e){throw console.error("Error fetching quote:",e),e}},Y=()=>new Date().toISOString().split("T")[0],W=async()=>{const e=JSON.parse(localStorage.getItem("quoteOfTheDay")),t=Y();if(e&&e.date===t)return console.log("Already have today's quote:",e),e;const s={...await z(),date:t};return localStorage.setItem("quoteOfTheDay",JSON.stringify(s)),s};async function te(){try{const e=await W(),t=document.querySelector(".quote-api-text"),o=document.querySelector(".quote-api-author");t&&(t.textContent=e.quote||"No quote available"),o&&(o.textContent=e.author||"Unknown author")}catch(e){console.error("Error rendering quote:",e)}}export{X as a,ee as f,I as o,te as r};
//# sourceMappingURL=quote-api-localStorage-DjgsZB6S.js.map
