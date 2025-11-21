import{f as k,a as M,r as F}from"./assets/modal-exercise-BjHNi18i.js";import{a as j,i as p}from"./assets/vendor-D2ogNlHo.js";function N(t,e){const s=t.map(({filter:i,imgURL:a,name:n})=>`
          <li class="categories-item" data-name="${n}">
            <img
            class="category-image"
            src="${a}"
            alt="${n}"
          />
          <div class="categories-item-info">
            <h3>${n}</h3>
            <p>${i}</p>
            </div>
          </li>
      `).join("");e.innerHTML=s}function E(t,e){const s=t.map(({_id:i,name:a,target:n,bodyPart:r,burnedCalories:y,rating:u})=>`
    <li class="exercises-item">
    <div class="header-card">
       <div class="header-left"> 
        <span class="type">WORKOUT</span>
        <span class="rating">${u}</span>
        <svg class="icon-star" width="18" height="18">
            <use href="../assets/icons/icons-not-min.svg#icon-star"></use>
        </svg>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${i}"> Start </button>
        <svg class="icon-arrow-right" width="18" height="18">
          <use href="../assets/icons/icons-not-min.svg#icon-arrow-1"></use>
        </svg>
        </div>
    </div>
    <div class="title">
     <svg class="icon" width="24" height="24">
            <use href="../assets/icons/icons-not-min.svg#icon-run-man-2"></use>
      </svg>
      <span class="name-text">${a}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${y} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span>
            <span class="body-part-value">${r}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${n}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");e.innerHTML=s}function g(t,e,s){const a=Array.from({length:t},(n,r)=>r+1).map(n=>`
          <li class="pagination-control-item">
            <button class="${e===n?"pagination-control-active":"pagination-control"}" data-page="${n}">${n}</button>
          </li>
      `).join("");s.innerHTML=a}function B(t,e,s){const i=t.map(a=>`
          <li class="filters-list-item ${e===a?"filters-list-item-active":""}" data-option="${a}"><p>${a}</p></li>
      `).join("");s.innerHTML=i}const h=document.getElementById("footerSubscribeForm");if(h){let i=function(r){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)},a=function(r){p.success({title:"Success",message:r,position:"topRight",timeout:5e3})},n=function(r){p.error({title:"Error",message:r,position:"topRight",timeout:5e3})};const t=h.querySelector('input[name="email"]'),e=h.querySelector('button[type="submit"]');h.addEventListener("submit",s);async function s(r){r.preventDefault();const y=t.value.trim();if(!i(y)){n("Invalid email address");return}try{e.disabled=!0;const u=await j.post("https://your-energy.b.goit.study/api/subscription",{email:y},{headers:{"Content-Type":"application/json"}});u.status===201&&(a(u.data.message),h.reset())}catch(u){u.response?n(u.response.data.message||"Subscription failed"):n("Network error. Please try again.")}finally{e.disabled=!1}}}function S(t){if(!t)return;let e=t.querySelector(".local-loader-wrapper");e||(e=document.createElement("div"),e.classList.add("local-loader-wrapper"),e.innerHTML=`
      <div class="hypnotic"></div>
    `,t.style.position="relative",t.appendChild(e)),e.classList.remove("hidden")}function T(t){if(!t)return;const e=t.querySelector(".local-loader-wrapper");e&&e.classList.add("hidden")}const x=["Muscles","Body parts","Equipment"],A=375,H=document.querySelector("span.slash"),R=document.querySelector("p.current-category"),z=document.querySelector("p.warning"),P=document.querySelector("ul.filters-list"),v=document.querySelector("ul.block-categories-list"),f=document.querySelector("ul.exercises-list"),o=document.querySelector("ul.pagination-controls-list"),L=document.querySelector("form.search-form"),I=L.querySelector(".search-input"),b=document.querySelector("button.clear-btn"),l=document.getElementById("categories-section"),D=document.documentElement.clientWidth<=A;let d=x[0],c="",m="",$=1,O=D?9:12,q=D?8:10;L.addEventListener("input",t=>{m=t.target.value,m.length?b.classList.remove("visually-hidden"):b.classList.add("visually-hidden")});L.addEventListener("submit",async t=>{t.preventDefault(),S(l);try{const e=await k(d,c,m,$,q),{results:s,page:i,totalPages:a}=e;o.innerHTML="",E(s,f),g(Number(a),Number(i),o)}catch(e){p.error({icon:"",position:"topRight",message:e.message})}finally{T(l)}});b.addEventListener("click",async()=>{m="",I.value="",b.classList.add("visually-hidden"),E(results,f),g(Number(totalPages),Number(page),o),C()});async function C(){v.innerHTML="",f.innerHTML="",o.innerHTML="",S(l);try{await new Promise(a=>setTimeout(a,2e3));const t=await M(d,$,O),{results:e,page:s,totalPages:i}=t;N(e,v),g(Number(i),Number(s),o)}catch(t){z.classList.remove("visually-hidden"),p.error({icon:"",position:"topRight",message:t.message})}finally{T(l)}}P.addEventListener("click",Q);function Q(t){const e=t.target.closest(".filters-list-item");e&&(d=e.dataset.option,C(),B(x,d,P),L.classList.add("visually-hidden"),m="",c="",I.value="",H.classList.add("visually-hidden"),R.textContent=c)}v.addEventListener("click",V);async function V(t){const e=t.target.closest(".categories-item");if(e){S(l),c=e.dataset.name;try{const s=await k(d,c,m,$,q),{results:i,page:a,totalPages:n}=s;v.innerHTML="",o.innerHTML="",E(i,f),g(Number(n),Number(a),o),L.classList.remove("visually-hidden"),H.classList.remove("visually-hidden"),R.textContent=c}catch(s){p.error({icon:"",position:"topRight",message:s.message})}finally{T(l)}}}o.addEventListener("click",W);async function W(t){const e=t.target.closest("button[data-page]");if(e){S(l);const s=parseInt(e.dataset.page,10);try{if(c){const i=await k(d,c,m,s,q),{results:a,page:n,totalPages:r}=i;E(a,f),g(Number(r),Number(n),o)}else{console.log(1);const i=await M(d,s,O),{results:a,page:n,totalPages:r}=i;N(a,v),g(Number(r),Number(n),o)}}catch(i){p.error({icon:"",position:"topRight",message:i.message})}finally{T(l)}}}document.addEventListener("DOMContentLoaded",F);B(x,d,P);C();const w=document.getElementById("scroll-top");console.log(w);const Z=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},_=()=>{window.scrollY>window.innerHeight?w.classList.add("scroll-show"):w.classList.remove("scroll-show")};window.addEventListener("scroll",_);w.addEventListener("click",Z);
//# sourceMappingURL=index.js.map
