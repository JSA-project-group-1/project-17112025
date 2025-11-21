import{f as q,a as R,r as W}from"./assets/modal-exercise-DdTQuRUY.js";import{a as Z,i as f}from"./assets/vendor-D2ogNlHo.js";const g="/project-17112025/assets/icons-not-min-CqnbliU1.svg";function F(s,t){const i=s.map(({filter:e,imgURL:a,name:n})=>`
          <li class="categories-item" data-name="${n}">
            <img
            class="category-image"
            src="${a}"
            alt="${n}"
          />
          <div class="categories-item-info">
            <h3>${n}</h3>
            <p>${e}</p>
            </div>
          </li>
      `).join("");t.innerHTML=i}function P(s,t){const i=s.map(({_id:e,name:a,target:n,bodyPart:o,burnedCalories:h,rating:d})=>`
    <li class="exercises-item">
    <div class="header-card">
       <div class="header-left">
        <span class="type">WORKOUT</span>
        <span class="rating">${d}</span>
        <svg class="icon-star" width="18" height="18">
            <use href="${g}#icon-star"></use>
        </svg>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${e}"> Start </button>
        <svg class="icon-arrow-right" width="18" height="18">
          <use href="${g}#icon-arrow-1"></use>
        </svg>
        </div>
    </div>
    <div class="title">
     <svg class="icon" width="24" height="24">
            <use href="${g}#icon-run-man-2"></use>
      </svg>
      <span class="name-text">${a}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${h} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span>
            <span class="body-part-value">${o}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${n}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");t.innerHTML=i}function y(s,t,i){const e=Number(t),a=Number(s);Array.from({length:a},(st,V)=>V+1);const n=e===1,o=e===a,h=`
      <li class="pagination-control-item">
          <button class=" ${n?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="beg"
                  ${n?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
                  <svg class="left-vector" width="6" height="24">
                    <use href="${g}#icon-vector"></use>
                  </svg>
          </button>
      </li>
      <li class="pagination-control-item">
          <button class=" ${n?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="prev"
                  ${n?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
           </button>
      </li>
  `,d=`
  ${n?`
    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="1">1</button>
    </li>
    ${a>1?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="2">2</button>
      </li>
      `:""}
    ${a>2?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="3">3</button>
      </li>
      `:""}
    ${a>3?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
  `:""}

  ${!n&&o?`
    ${a>3?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
    ${a>2?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="${e-2}">${e-2}</button>
      </li>
    `:""}
    ${a>1?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="${e-1}">${e-1}</button>
      </li>
    `:""}
    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="${e}">${e}</button>
    </li>
  `:""}

  ${!n&&!o?`
    ${e>2?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}

    <li class="pagination-control-item">
        <button class="pagination-control" data-page="${e-1}">${e-1}</button>
    </li>

    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="${e}">${e}</button>
    </li>

    <li class="pagination-control-item">
        <button class="pagination-control" data-page="${e+1}">${e+1}</button>
    </li>

    ${a-e>2?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
  `:""}
  `,U=`
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${o?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="next"
                  ${o?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
           </button>
      </li>
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${o?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="end"
                  ${o?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
          </button>
      </li>
  `,Q=h+d+U;i.innerHTML=Q}function O(s,t,i){const e=s.map(a=>`
          <li class="filters-list-item ${t===a?"filters-list-item-active":""}" data-option="${a}"><p>${a}</p></li>
      `).join("");i.innerHTML=e}const $=document.getElementById("footerSubscribeForm");if($){let e=function(o){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o)},a=function(o){f.success({title:"Success",message:o,position:"topRight",timeout:5e3})},n=function(o){f.error({title:"Error",message:o,position:"topRight",timeout:5e3})};const s=$.querySelector('input[name="email"]'),t=$.querySelector('button[type="submit"]');$.addEventListener("submit",i);async function i(o){o.preventDefault();const h=s.value.trim();if(!e(h)){n("Invalid email address");return}try{t.disabled=!0;const d=await Z.post("https://your-energy.b.goit.study/api/subscription",{email:h},{headers:{"Content-Type":"application/json"}});d.status===201&&(a(d.data.message),$.reset())}catch(d){d.response?n(d.response.data.message||"Subscription failed"):n("Network error. Please try again.")}finally{t.disabled=!1}}}function M(s){if(!s)return;let t=s.querySelector(".local-loader-wrapper");t||(t=document.createElement("div"),t.classList.add("local-loader-wrapper"),t.innerHTML=`
      <div class="hypnotic"></div>
    `,s.style.position="relative",s.appendChild(t)),t.classList.remove("hidden")}function T(s){if(!s)return;const t=s.querySelector(".local-loader-wrapper");t&&t.classList.add("hidden")}const C=["Muscles","Body parts","Equipment"],_=375,j=document.documentElement.clientWidth<=_,D=document.querySelector("span.slash"),A=document.querySelector("p.current-category"),K=document.querySelector("p.warning"),B=document.querySelector("ul.filters-list"),L=document.querySelector("ul.block-categories-list"),k=document.querySelector("ul.exercises-list"),l=document.querySelector("ul.pagination-controls-list"),x=document.querySelector("form.search-form"),N=x.querySelector(".search-input"),E=document.querySelector("button.clear-btn"),m=document.getElementById("categories-section"),Y=document.querySelector("a.nav-link");Y.classList.add("nav-link--active");let v=C[0],u="",b="",c=1,w=1,z=j?9:12,r=1,p=1,H=j?8:10;x.addEventListener("input",s=>{b=s.target.value,b.length?E.classList.remove("visually-hidden"):E.classList.add("visually-hidden")});x.addEventListener("submit",async s=>{s.preventDefault(),M(m);try{const t=await q(v,u,b,r,H),{results:i,page:e,totalPages:a}=t;p=a,r=e,l.innerHTML="",P(i,k),y(p,r,l)}catch(t){f.error({icon:"",position:"topRight",message:t.message})}finally{T(m)}});E.addEventListener("click",async()=>{b="",N.value="",E.classList.add("visually-hidden"),P(results,k),y(p,r,l),I()});async function I(){L.innerHTML="",k.innerHTML="",l.innerHTML="",M(m);try{const s=await R(v,c,z),{results:t,page:i,totalPages:e}=s;w=e,c=i,F(t,L),y(w,c,l)}catch(s){K.classList.remove("visually-hidden"),f.error({icon:"",position:"topRight",message:s.message})}finally{T(m)}}B.addEventListener("click",G);function G(s){const t=s.target.closest(".filters-list-item");t&&(v=t.dataset.option,I(),O(C,v,B),x.classList.add("visually-hidden"),b="",u="",N.value="",D.classList.add("visually-hidden"),A.textContent=u)}async function J(s){const t=s.target.closest(".categories-item");if(t){M(m),u=t.dataset.name;try{const i=await q(v,u,b,r,H),{results:e,page:a,totalPages:n}=i;p=n,r=a,L.innerHTML="",l.innerHTML="",P(e,k),e.length>0&&(y(p,r,l),x.classList.remove("visually-hidden")),A.textContent=u,D.classList.remove("visually-hidden")}catch(i){f.error({icon:"",position:"topRight",message:i.message})}finally{T(m)}}}async function X(s){const t=s.target.closest("button[data-page]");if(t){M(m),console.log(t.dataset.page);try{if(u){switch(t.dataset.page){case"beg":r=1;break;case"prev":r--;break;case"next":r++;break;case"end":r=p;break;default:r=parseInt(t.dataset.page,10)}const i=await q(v,u,b,r,H),{results:e,page:a,totalPages:n}=i;p=n,r=a,P(e,k),y(p,r,l)}else{switch(t.dataset.page){case"beg":c=1;break;case"prev":c--;break;case"next":c++;break;case"end":c=w;break;default:c=parseInt(t.dataset.page,10)}const i=await R(v,c,z),{results:e,page:a,totalPages:n}=i;w=n,c=a,F(e,L),y(w,c,l)}}catch(i){f.error({icon:"",position:"topRight",message:i.message})}finally{T(m)}}}O(C,v,B);I();L.addEventListener("click",J);l.addEventListener("click",X);document.addEventListener("DOMContentLoaded",W);const S=document.getElementById("scroll-top");console.log(S);const tt=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},et=()=>{window.scrollY>window.innerHeight?S.classList.add("scroll-show"):S.classList.remove("scroll-show")};window.addEventListener("scroll",et);S.addEventListener("click",tt);
//# sourceMappingURL=index.js.map
