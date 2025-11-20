import"./assets/header-DJd-5JJA.js";import{i as f}from"./assets/vendor-D2ogNlHo.js";const v="favorite_workouts",l=12;let r=[],n=1;function g(){const t=localStorage.getItem(v);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e:[]}catch(e){return console.error("Failed to parse favorites from LS:",e),f.error({message:"Favorites data is corrupted. Clearing storage.",position:"topRight",maxWidth:600}),localStorage.removeItem(v),[]}}function m(t){localStorage.setItem(v,JSON.stringify(t))}async function h(){const e=await fetch("https://your-energy.b.goit.study/api/exercises?page=1&limit=100");if(!e.ok)throw new Error(`HTTP error: ${e.status}`);const o=await e.json();if(Array.isArray(o))return o;if(Array.isArray(o.results))return o.results;if(Array.isArray(o.data))return o.data;throw new Error("Unexpected API response format")}function y(){let t=document.querySelector("[data-favorites-list]");if(t||(t=document.getElementById("favorites-list")),!t){const e=document.querySelector(".favorites-test-controls")||document.querySelector("section .container");if(!e)return null;t=document.createElement("div"),t.id="favorites-list",t.classList.add("favorites-list"),e.insertAdjacentElement("afterend",t)}return t}function b(t){const{_id:e,name:o,burnedCalories:i,time:a,bodyPart:c,target:d}=t;return`
    <article class="favorite-card" data-id="${e}">
      <div class="favorite-card-header">
        <span class="favorite-card-label">WORKOUT</span>
        <button
          type="button"
          class="favorite-remove-btn"
        >
          Remove card
        </button>
      </div>

      <h3 class="favorite-card-title">${o}</h3>

      <p class="favorite-card-text">
        Burned calories: <span>${i} / ${a} min</span>
      </p>
      <p class="favorite-card-text">
        Body part: <span>${c}</span>
      </p>
      <p class="favorite-card-text">
        Target: <span>${d}</span>
      </p>
    </article>
  `}function k(t,e){return t<=1?"":`
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
  `}function u(){const t=y();if(!t)return;if(!r.length){t.innerHTML="<p>No favorite workouts yet.</p>";const p=document.querySelector(".favorites-pagination");p&&p.remove();return}const e=Math.max(1,Math.ceil(r.length/l));n>e&&(n=e);const o=(n-1)*l,i=o+l,c=r.slice(o,i).map(b).join(""),d=k(e,n);t.innerHTML=c;const s=document.querySelector(".favorites-pagination");s&&s.remove(),t.insertAdjacentHTML("afterend",d)}async function x(){try{const t=await h();r=g();const e=new Set(r.map(a=>a._id)),o=t.find(a=>!e.has(a._id));if(!o){f.info({title:"No more workouts",message:"All workouts from API are already in favorites.",position:"topRight",maxWidth:600}),console.log("All workouts from API are already in favorites.");return}r.push(o),m(r),n=Math.max(1,Math.ceil(r.length/l)),u(),f.success({title:o.name,message:"Workout added to favorites.",position:"topRight",maxWidth:600}),console.log("Added workout:",o),console.log("Favorites after add:",r)}catch(t){console.error("Failed to add favorite:",t),f.error({title:"Error",message:"Failed to add workout to favorites.",position:"topRight",maxWidth:600})}}function A(t){const e=t.target.closest(".favorite-remove-btn");if(e){const i=e.closest(".favorite-card");if(!i)return;const a=i.dataset.id;if(!a)return;const c=r.find(s=>s._id===a),d=r.filter(s=>s._id!==a);if(d.length===r.length)return;if(r=d,m(r),!r.length)n=1,u();else{const s=Math.max(1,Math.ceil(r.length/l));n>s&&(n=s),u()}f.success({title:c?c.name:"Workout",message:"Workout removed from favorites.",position:"topRight",maxWidth:600}),console.log("Removed id:",a),console.log("Favorites after remove:",r);return}const o=t.target.closest(".favorites-page-btn");if(o){const i=o.dataset.page,a=Math.max(1,Math.ceil(r.length/l));i==="prev"&&n>1?n-=1:i==="next"&&n<a&&(n+=1),u()}}function w(){const t=document.getElementById("favorites-add-btn");t&&t.addEventListener("click",x),document.addEventListener("click",A),r=g(),n=1,u(),console.log("Favorites page initialized. Current favorites:",r)}w();
//# sourceMappingURL=favorites.js.map
