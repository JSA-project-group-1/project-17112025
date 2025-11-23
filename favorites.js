import{e as x,a as u,i as p}from"./assets/render-functions-Bx9uqR1G.js";import{i as v}from"./assets/vendor-D2ogNlHo.js";const h="favorite_workouts",k=375,M=document.documentElement.clientWidth<=k,L=1440,S=document.documentElement.clientWidth>=L;let e=[],n=1,i=1,d=M?8:S?1e3:10;const o=document.querySelector("ul.pagination-controls-list"),c=document.querySelector("ul.favorites-list");document.getElementById("favorites-blok");function m(){const t=localStorage.getItem(h);if(!t)return[];try{const a=JSON.parse(t);return Array.isArray(a)?a:[]}catch(a){return console.error("Failed to parse favorites from LS:",a),v.error({message:"Favorites data is corrupted. Clearing storage.",position:"topRight",maxWidth:600}),localStorage.removeItem(h),[]}}function T(t){localStorage.setItem(h,JSON.stringify(t))}function F(){c.innerHTML="",o.innerHTML="";try{e=m(),i=Math.max(1,Math.ceil(e.length/d));const t=(n-1)*d,a=n*d,s=e.slice(t,a);g(s,c),e.length>0&&u(i,n,o)}catch(t){v.error({icon:"",position:"topRight",message:t.message})}}function g(t,a){if(t.length>0){const s=t.map(({_id:r,name:l,target:f,bodyPart:y,burnedCalories:b})=>`
    <li class="exercises-item">
    <div class="header-card">
    <div class="header-left">
        <span class="type">WORKOUT</span>
          <button type="button" class="favorite-remove-btn" data-id="${r}">
            <svg class="modal-exercise-trash-icon favorite-exercise-trash-icon" width="18" height="18">
              <use href="${p}#icon-trash"></use></svg>
            </span>
          </button>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${r}"> Start
        <svg class="icon-arrow-right" width="18" height="18">
        <use href="${p}#icon-arrow-1"></use>
        </svg>
        </button>
        </div>
        </div>
    <div class="title">
      <button type="button" class="exercise-rating-btn js-give-rating-btn" data-exercise-id="${r}">
      <svg class="icon" width="24" height="24">
      <use href="${p}#icon-run-man-2"></use>
      </svg>
      </button>
      <span class="name-text-exercise">${l}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
        <li class="calories">
        <span class="calories-name">Burned calories</span>
        <span class="calories-value">${b} / 3 min</span>
        </li>
        <li class="body-part">
        <span class="body-part-name">Body part:</span>
        <span class="body-part-value">${y}</span>
        </li>
        <li class="target">
        <span class="target-name">Target:</span>
        <span class="target-value">${f}</span>
          </li>
          </ul>
          </div>
          </li>
          `).join("");a.innerHTML=s}else a.innerHTML="<div class='no-content-warning'><p>It appears that you haven't added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p></div>"}function w(t){if(t.target.closest('[data-modal-exercise="close"]')){const s=m(),r=JSON.stringify(e),l=JSON.stringify(s);if(r===l)return;e=s,c.innerHTML="",o.innerHTML="",i=Math.max(1,Math.ceil(e.length/d)),g(e,c),e.length>0&&u(i,n,o)}}function I(t){const a=t.target.closest("button[data-id]");if(a){const s=a.dataset.id;if(!s)return;const r=e.filter(l=>l._id!==s);if(r.length===e.length)return;e=r,T(e),c.innerHTML="",o.innerHTML="",i=Math.max(1,Math.ceil(e.length/d)),g(e,c),e.length>0&&u(i,n,o)}}function $(t){const a=t.target.closest("button[data-page]");if(a)try{switch(a.dataset.page){case"beg":n=1;break;case"prev":n--;break;case"next":n++;break;case"end":n=i;break;default:n=parseInt(a.dataset.page,10)}const s=(n-1)*d,r=n*d,l=e.slice(s,r);g(l,c),e.length>0&&u(i,n,o)}catch(s){v.error({icon:"",position:"topRight",message:s.message})}}function E(){x(),F(),c.addEventListener("click",I),o.addEventListener("click",$),document.addEventListener("click",w)}E();
//# sourceMappingURL=favorites.js.map
