import{e as x,a as g,i as h,o as L}from"./assets/render-functions-BY64Jt2m.js";import{i as m}from"./assets/vendor-D2ogNlHo.js";const v="favorite_workouts",M=375,S=document.documentElement.clientWidth<=M,T=1440,F=document.documentElement.clientWidth>=T;let a=[],s=1,o=1,d=S?8:F?1e3:10;const c=document.querySelector("ul.pagination-controls-list"),l=document.querySelector("ul.favorites-list");document.getElementById("favorites-blok");function f(){const t=localStorage.getItem(v);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e:[]}catch(e){return console.error("Failed to parse favorites from LS:",e),m.error({message:"Favorites data is corrupted. Clearing storage.",position:"topRight",maxWidth:600}),localStorage.removeItem(v),[]}}function I(t){localStorage.setItem(v,JSON.stringify(t))}function w(){l.innerHTML="",c.innerHTML="";try{a=f(),o=Math.max(1,Math.ceil(a.length/d));const t=(s-1)*d,e=s*d,i=a.slice(t,e);u(i,l),a.length>0&&g(o,s,c)}catch(t){m.error({icon:"",position:"topRight",message:t.message})}}function u(t,e){if(t.length>0){const n=t.map(({_id:r,name:p,target:b,bodyPart:y,burnedCalories:k})=>`
    <li class="exercises-item">
    <div class="header-card">
    <div class="header-left">
        <span class="type">WORKOUT</span>
          <button type="button" class="favorite-remove-btn" data-id="${r}">
            <svg class="modal-exercise-trash-icon favorite-exercise-trash-icon" width="18" height="18">
              <use href="${h}#icon-trash"></use></svg>
            </span>
          </button>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${r}"> Start
        <svg class="icon-arrow-right" width="18" height="18">
        <use href="${h}#icon-arrow-1"></use>
        </svg>
        </button>
        </div>
        </div>
    <div class="title">
      <button type="button" class="exercise-rating-btn js-give-rating-btn" data-exercise-id="${r}">
      <svg class="icon" width="24" height="24">
      <use href="${h}#icon-run-man-2"></use>
      </svg>
      </button>
      <span class="name-text-exercise">${p}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
        <li class="calories">
        <span class="calories-name">Burned calories</span>
        <span class="calories-value">${k} / 3 min</span>
        </li>
        <li class="body-part">
        <span class="body-part-name">Body part:</span>
        <span class="body-part-value">${y}</span>
        </li>
        <li class="target">
        <span class="target-name">Target:</span>
        <span class="target-value">${b}</span>
          </li>
          </ul>
          </div>
          </li>
          `).join("");e.innerHTML=n}else e.innerHTML="<div class='no-content-warning'><p>It appears that you haven't added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p></div>";e.querySelectorAll(".js-give-rating-btn").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.exerciseId;L(r,null)})})}function B(t){const e=t.target.closest('[data-modal-exercise="close"]'),i=t.target.className==="basicLightbox";if(e||i){const n=f(),r=JSON.stringify(a),p=JSON.stringify(n);if(r===p)return;a=n,l.innerHTML="",c.innerHTML="",o=Math.max(1,Math.ceil(a.length/d)),u(a,l),a.length>0&&g(o,s,c)}}function E(t){const e=t.target.closest("button[data-id]");if(e){const i=e.dataset.id;if(!i)return;const n=a.filter(r=>r._id!==i);if(n.length===a.length)return;a=n,I(a),l.innerHTML="",c.innerHTML="",o=Math.max(1,Math.ceil(a.length/d)),u(a,l),a.length>0&&g(o,s,c)}}function $(t){const e=t.target.closest("button[data-page]");if(e)try{switch(e.dataset.page){case"beg":s=1;break;case"prev":s--;break;case"next":s++;break;case"end":s=o;break;default:s=parseInt(e.dataset.page,10)}const i=(s-1)*d,n=s*d,r=a.slice(i,n);u(r,l),a.length>0&&g(o,s,c)}catch(i){m.error({icon:"",position:"topRight",message:i.message})}}function C(){x(),w(),l.addEventListener("click",E),c.addEventListener("click",$),document.addEventListener("click",B)}C();
//# sourceMappingURL=favorites.js.map
