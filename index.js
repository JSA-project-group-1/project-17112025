import{o as Y,f as B,a as F,r as Z}from"./assets/modal-exercise-B1vNkw20.js";import{a as K,i as y}from"./assets/vendor-D2ogNlHo.js";const g="/project-17112025/assets/icons-not-min-CqnbliU1.svg";function j(s,t){const i=s.map(({filter:e,imgURL:a,name:n})=>`
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
      `).join("");t.innerHTML=i}function P(s,t){const i=s.map(({_id:a,name:n,target:o,bodyPart:h,burnedCalories:d,rating:T})=>`
    <li class="exercises-item">
    <div class="header-card">
       <div class="header-left">
        <span class="type">WORKOUT</span>
        <span class="rating">${Number(T).toFixed(1)}</span>
        <svg class="icon-star" width="18" height="18">
            <use href="${g}#icon-star"></use>
        </svg>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${a}"> Start </button>
        <svg class="icon-arrow-right" width="18" height="18">
          <use href="${g}#icon-arrow-1"></use>
        </svg>
        </div>
    </div>
    <div class="title">
      <button type="button" class="exercise-rating-btn js-give-rating-btn" data-exercise-id="${a}">
        <svg class="icon" width="24" height="24">
          <use href="${g}#icon-run-man-2"></use>
        </svg>
      </button
      <span class="name-text">${n}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${d} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span>
            <span class="body-part-value">${h}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${o}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");t.innerHTML=i,t.querySelectorAll(".js-give-rating-btn").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.exerciseId;Y(n,null)})})}function w(s,t,i){const e=Number(t),a=Number(s);Array.from({length:a},(at,W)=>W+1);const n=e===1,o=e===a,h=`
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
  `,T=`
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
  `,V=h+d+T;i.innerHTML=V}function O(s,t,i){const e=s.map(a=>`
          <li class="filters-list-item ${t===a?"filters-list-item-active":""}" data-option="${a}"><p>${a}</p></li>
      `).join("");i.innerHTML=e}const $=document.getElementById("footerSubscribeForm");if($){let e=function(o){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o)},a=function(o){y.success({title:"Success",message:o,position:"topRight",timeout:5e3})},n=function(o){y.error({title:"Error",message:o,position:"topRight",timeout:5e3})};const s=$.querySelector('input[name="email"]'),t=$.querySelector('button[type="submit"]');$.addEventListener("submit",i);async function i(o){o.preventDefault();const h=s.value.trim();if(!e(h)){n("Invalid email address");return}try{t.disabled=!0;const d=await K.post("https://your-energy.b.goit.study/api/subscription",{email:h},{headers:{"Content-Type":"application/json"}});d.status===201&&(a(d.data.message),$.reset())}catch(d){d.response?n(d.response.data.message||"Subscription failed"):n("Network error. Please try again.")}finally{t.disabled=!1}}}function q(s){if(!s)return;let t=s.querySelector(".local-loader-wrapper");t||(t=document.createElement("div"),t.classList.add("local-loader-wrapper"),t.innerHTML=`
      <div class="hypnotic"></div>
    `,s.style.position="relative",s.appendChild(t)),t.classList.remove("hidden")}function M(s){if(!s)return;const t=s.querySelector(".local-loader-wrapper");t&&t.classList.add("hidden")}const C=["Muscles","Body parts","Equipment"],_=375,A=document.documentElement.clientWidth<=_,D=document.querySelector("span.slash"),N=document.querySelector("p.current-category"),G=document.querySelector("p.warning"),H=document.querySelector("ul.filters-list"),k=document.querySelector("ul.block-categories-list"),x=document.querySelector("ul.exercises-list"),l=document.querySelector("ul.pagination-controls-list"),E=document.querySelector("form.search-form"),z=E.querySelector(".search-input"),S=document.querySelector("button.clear-btn"),m=document.getElementById("categories-section"),J=document.querySelector("a.nav-link");J.classList.add("nav-link--active");let v=C[0],u="",f="",c=1,L=1,U=A?9:12,r=1,p=1,R=A?8:10;E.addEventListener("input",s=>{f=s.target.value,f.length?S.classList.remove("visually-hidden"):S.classList.add("visually-hidden")});E.addEventListener("submit",async s=>{s.preventDefault(),q(m);try{const t=await B(v,u,f,r,R),{results:i,page:e,totalPages:a}=t;p=a,r=e,l.innerHTML="",P(i,x),w(p,r,l)}catch(t){y.error({icon:"",position:"topRight",message:t.message})}finally{M(m)}});S.addEventListener("click",async()=>{f="",z.value="",S.classList.add("visually-hidden"),P(results,x),w(p,r,l),I()});async function I(){k.innerHTML="",x.innerHTML="",l.innerHTML="",q(m);try{const s=await F(v,c,U),{results:t,page:i,totalPages:e}=s;L=e,c=i,j(t,k),w(L,c,l)}catch(s){G.classList.remove("visually-hidden"),y.error({icon:"",position:"topRight",message:s.message})}finally{M(m)}}H.addEventListener("click",X);function X(s){const t=s.target.closest(".filters-list-item");t&&(v=t.dataset.option,I(),O(C,v,H),E.classList.add("visually-hidden"),f="",u="",z.value="",D.classList.add("visually-hidden"),N.textContent=u)}async function tt(s){const t=s.target.closest(".categories-item");if(t){q(m),u=t.dataset.name;try{const i=await B(v,u,f,r,R),{results:e,page:a,totalPages:n}=i;p=n,r=a,k.innerHTML="",l.innerHTML="",P(e,x),e.length>0&&(w(p,r,l),E.classList.remove("visually-hidden")),N.textContent=u,D.classList.remove("visually-hidden")}catch(i){y.error({icon:"",position:"topRight",message:i.message})}finally{M(m)}}}async function et(s){const t=s.target.closest("button[data-page]");if(t){q(m),console.log(t.dataset.page);try{if(u){switch(t.dataset.page){case"beg":r=1;break;case"prev":r--;break;case"next":r++;break;case"end":r=p;break;default:r=parseInt(t.dataset.page,10)}const i=await B(v,u,f,r,R),{results:e,page:a,totalPages:n}=i;p=n,r=a,P(e,x),w(p,r,l)}else{switch(t.dataset.page){case"beg":c=1;break;case"prev":c--;break;case"next":c++;break;case"end":c=L;break;default:c=parseInt(t.dataset.page,10)}const i=await F(v,c,U),{results:e,page:a,totalPages:n}=i;L=n,c=a,j(e,k),w(L,c,l)}}catch(i){y.error({icon:"",position:"topRight",message:i.message})}finally{M(m)}}}O(C,v,H);I();k.addEventListener("click",tt);l.addEventListener("click",et);document.addEventListener("DOMContentLoaded",Z);const b=document.getElementById("scroll-top"),st=()=>{window.scrollTo({top:0,behavior:"smooth"})},Q=()=>{const s=window.scrollY,t=document.querySelector("footer");if(s>window.innerHeight)if(b.classList.add("scroll-show"),t){const i=t.getBoundingClientRect();if(i.top<window.innerHeight){const e=window.innerHeight-i.top;b.style.bottom=e+200+"px"}else b.style.bottom="30px"}else b.style.bottom="30px";else b.classList.remove("scroll-show"),b.style.bottom="30px"};window.addEventListener("scroll",Q);window.addEventListener("resize",Q);b.addEventListener("click",st);
//# sourceMappingURL=index.js.map
