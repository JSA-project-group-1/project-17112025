import{e as m}from"./assets/render-functions-YT1qdQw6.js";import{i as v}from"./assets/vendor-D2ogNlHo.js";const p="favorite_workouts",d=12;let a=[],s=1;function g(){const t=localStorage.getItem(p);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e:[]}catch(e){return console.error("Failed to parse favorites from LS:",e),v.error({message:"Favorites data is corrupted. Clearing storage.",position:"topRight",maxWidth:600}),localStorage.removeItem(p),[]}}function b(t){localStorage.setItem(p,JSON.stringify(t))}function h(){let t=document.querySelector("[data-favorites-list]");if(t||(t=document.getElementById("favorites-list")),t)t.classList.add("favorites-list","exercises-list");else{const e=document.querySelector("section .container");if(!e)return null;t=document.createElement("div"),t.id="favorites-list",t.classList.add("favorites-list","exercises-list"),e.appendChild(t)}return t}function y(t){const{_id:e,name:o,burnedCalories:n,time:c,bodyPart:r,target:l}=t;return`
    <li class="exercises-item favorite-card favorites-item" data-id="${e}">
      <div class="header">
        <div class="workout-rating">
          <span class="type">WORKOUT</span>
          <button
            type="button"
            class="favorite-remove-btn"
          >
            Remove
          </button>
        </div>

        <button
          class="start-btn"
          type="button"
          data-modal-exercise="open"
          data-exercise-id="${e}"
        >
          Start
        </button>
      </div>

      <div class="title">
        <span class="icon"></span>${o}
      </div>

      <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${n} / ${c} min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span>
            <span class="body-part-value">${r}</span>
          </li>
          <li class="target">
            <span class="target-name">Target:</span>
            <span class="target-value">${l}</span>
          </li>
        </ul>
      </div>
    </li>
  `}function x(t,e){return t<=1?"":`
    <div class="favorites-pagination">
      <button
        type="button"
        class="favorites-page-btn"
        data-page="prev"
        ${e===1?"disabled":""}
      >&lt;</button>

      <span class="favorites-page-info">${e} / ${t}</span>

      <button
        type="button"
        class="favorites-page-btn"
        data-page="next"
        ${e===t?"disabled":""}
      >&gt;</button>
    </div>
  `}function f(){const t=h();if(!t)return;if(!a.length){t.innerHTML="<p>No favorite workouts yet.</p>";const i=document.querySelector(".favorites-pagination");i&&i.remove();return}const e=Math.max(1,Math.ceil(a.length/d));s>e&&(s=e);const o=(s-1)*d,n=o+d,r=a.slice(o,n).map(y).join(""),l=x(e,s);t.innerHTML=r;const u=document.querySelector(".favorites-pagination");u&&u.remove(),t.insertAdjacentHTML("afterend",l)}function S(){const t=g(),e=JSON.stringify(a),o=JSON.stringify(t);if(e!==o){if(a=t,!a.length)s=1;else{const n=Math.max(1,Math.ceil(a.length/d));s>n&&(s=n)}f()}}function M(t){if(t.target.closest('[data-modal-exercise="close"]')){S();return}const o=t.target.closest(".favorite-remove-btn");if(o){const c=o.closest(".favorite-card");if(!c)return;const r=c.dataset.id;if(!r)return;const l=a.find(i=>i._id===r),u=a.filter(i=>i._id!==r);if(u.length===a.length)return;if(a=u,b(a),!a.length)s=1;else{const i=Math.max(1,Math.ceil(a.length/d));s>i&&(s=i)}f(),v.success({title:l?l.name:"Workout",message:"Workout removed from favorites.",position:"topRight",maxWidth:600});return}const n=t.target.closest(".favorites-page-btn");if(n){const c=n.dataset.page,r=Math.max(1,Math.ceil(a.length/d));c==="prev"&&s>1?s-=1:c==="next"&&s<r&&(s+=1),f()}}function F(){document.addEventListener("click",M),a=g(),s=1,m(),f()}F();
//# sourceMappingURL=favorites.js.map
