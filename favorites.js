import{e as k,a as g,i as p,o as M}from"./assets/render-functions-6eaMdBKV.js";import{i as v}from"./assets/vendor-D2ogNlHo.js";const h="favorite_workouts",L=375,S=document.documentElement.clientWidth<=L,T=1440,F=document.documentElement.clientWidth>=T;let t=[],s=1,o=1,d=S?8:F?1e3:10;const c=document.querySelector("ul.pagination-controls-list"),l=document.querySelector("ul.favorites-list");document.getElementById("favorites-blok");function m(){const a=localStorage.getItem(h);if(!a)return[];try{const e=JSON.parse(a);return Array.isArray(e)?e:[]}catch(e){return console.error("Failed to parse favorites from LS:",e),v.error({message:"Favorites data is corrupted. Clearing storage.",position:"topRight",maxWidth:600}),localStorage.removeItem(h),[]}}function I(a){localStorage.setItem(h,JSON.stringify(a))}function w(){l.innerHTML="",c.innerHTML="";try{t=m(),o=Math.max(1,Math.ceil(t.length/d));const a=(s-1)*d,e=s*d,n=t.slice(a,e);u(n,l),t.length>0&&g(o,s,c)}catch(a){v.error({icon:"",position:"topRight",message:a.message})}}function u(a,e){if(a.length>0){const r=a.map(({_id:i,name:f,target:y,bodyPart:b,burnedCalories:x})=>`
    <li class="exercises-item">
    <div class="header-card">
    <div class="header-left">
        <span class="type">WORKOUT</span>
          <button type="button" class="favorite-remove-btn" data-id="${i}">
            <svg class="modal-exercise-trash-icon favorite-exercise-trash-icon" width="18" height="18">
              <use href="${p}#icon-trash"></use></svg>
            </span>
          </button>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${i}"> Start
        <svg class="icon-arrow-right" width="18" height="18">
        <use href="${p}#icon-arrow-1"></use>
        </svg>
        </button>
        </div>
        </div>
    <div class="title">
      <button type="button" class="exercise-rating-btn js-give-rating-btn" data-exercise-id="${i}">
      <svg class="icon" width="24" height="24">
      <use href="${p}#icon-run-man-2"></use>
      </svg>
      </button>
      <span class="name-text-exercise">${f}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
        <li class="calories">
        <span class="calories-name">Burned calories</span>
        <span class="calories-value">${x} / 3 min</span>
        </li>
        <li class="body-part">
        <span class="body-part-name">Body part:</span>
        <span class="body-part-value">${b}</span>
        </li>
        <li class="target">
        <span class="target-name">Target:</span>
        <span class="target-value">${y}</span>
          </li>
          </ul>
          </div>
          </li>
          `).join("");e.innerHTML=r}else e.innerHTML="<div class='no-content-warning'><p>It appears that you haven't added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p></div>";e.querySelectorAll(".js-give-rating-btn").forEach(r=>{r.addEventListener("click",()=>{const i=r.dataset.exerciseId;M(i,null)})})}function E(a){if(a.target.closest('[data-modal-exercise="close"]')){const n=m(),r=JSON.stringify(t),i=JSON.stringify(n);if(r===i)return;t=n,l.innerHTML="",c.innerHTML="",o=Math.max(1,Math.ceil(t.length/d)),u(t,l),t.length>0&&g(o,s,c)}}function $(a){const e=a.target.closest("button[data-id]");if(e){const n=e.dataset.id;if(!n)return;const r=t.filter(i=>i._id!==n);if(r.length===t.length)return;t=r,I(t),l.innerHTML="",c.innerHTML="",o=Math.max(1,Math.ceil(t.length/d)),u(t,l),t.length>0&&g(o,s,c)}}function B(a){const e=a.target.closest("button[data-page]");if(e)try{switch(e.dataset.page){case"beg":s=1;break;case"prev":s--;break;case"next":s++;break;case"end":s=o;break;default:s=parseInt(e.dataset.page,10)}const n=(s-1)*d,r=s*d,i=t.slice(n,r);u(i,l),t.length>0&&g(o,s,c)}catch(n){v.error({icon:"",position:"topRight",message:n.message})}}function H(){k(),w(),l.addEventListener("click",$),c.addEventListener("click",B),document.addEventListener("click",E)}H();
//# sourceMappingURL=favorites.js.map
